import { redirect } from "react-router";
import AuthForm from "../components/AuthForm";
import { USERS } from "../assets/helperData";

export default function Login() {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  const data = await request.formData();

  const authData = {
    username: data.get("username"),
    password: data.get("password"),
    errors: [],
  };

  if (mode === "register") {
    authData.email = data.get("email");
    authData.confirmPassword = data.get("confirmPassword");
    if (authData.password !== authData.confirmPassword) {
      authData.errors.push("Passwords do not match");
    }
  }

  if (mode === "login") {
    const currentUser = USERS.filter(
      (user) => authData.username === user.username
    )[0];
    if (!currentUser) {
      authData.errors.push("User does not exist. Please create an account");
    } else if (currentUser.password !== authData.password) {
      authData.errors.push("Invalid password");
    } else {
      alert("Login successful. You will now be redirected to the home page.");
      return redirect("/");
    }
  }

  if (authData.errors.length === 0) {
    alert(
      "User registration successful! You will now be redirected to the home page."
    );
    return redirect("/");
  }

  return authData;
}
