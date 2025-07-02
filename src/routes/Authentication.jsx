import { redirect } from "react-router";
import AuthForm from "../components/AuthForm";

export default function Login() {
  return <AuthForm />;
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
