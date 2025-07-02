import { redirect } from "react-router";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return <LoginForm />;
}

export async function action({ request, params }) {
  console.log(params);
  const data = await request.formData();

  const loginData = {
    username: data.get("username"),
    password: data.get("password"),
  };
  console.log(loginData);

  return redirect("");
}
