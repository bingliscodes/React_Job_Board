import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  redirect,
} from "react-router";

import classes from "./LoginForm.module.css";

export default function LoginForm({ event }) {
  const nav = useNavigate();

  function handleCancel() {
    nav("..");
  }

  return (
    <Form method="POST" className={classes.form}>
      <p>
        <input
          placeholder="username"
          id="username"
          type="text"
          name="username"
          required
        />
      </p>
      <p>
        <input
          placeholder="password"
          id="password"
          type="password"
          name="password"
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button>Login</button>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();

  const loginData = {
    username: data.get("username"),
    password: data.get("password"),
  };

  return redirect("..");
}
