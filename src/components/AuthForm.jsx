import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  redirect,
} from "react-router";

import classes from "./AuthForm.module.css";

export default function LoginForm({ signup }) {
  const data = useActionData();
  const nav = useNavigate();

  function handleSubmit() {
    console.log("here");
  }

  function handleCancel() {
    nav("..");
  }

  return (
    <Form method="POST" onSubmit={handleSubmit} className={classes.form}>
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
      {signup && (
        <p>
          <input
            placeholder="confirm password"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            required
          />
        </p>
      )}
      <div className={classes.actions}>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button>{signup ? "Register" : "Login"}</button>
      </div>
    </Form>
  );
}
