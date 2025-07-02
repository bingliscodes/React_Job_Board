import {
  useNavigate,
  Link,
  Form,
  useNavigation,
  useActionData,
  redirect,
  useSearchParams,
} from "react-router";

import classes from "./AuthForm.module.css";

export default function LoginForm() {
  const data = useActionData();
  const nav = useNavigate();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();

  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" className={classes.form}>
      <h1>{isLogin ? "Log in" : "New User Sign Up"}</h1>
      {!isLogin && (
        <p>
          <input
            placeholder="email address"
            id="email"
            type="email"
            name="email"
            required
          />
        </p>
      )}
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
      {!isLogin && (
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
        <Link to={`?mode=${isLogin ? "register" : "login"}`}>
          {isLogin ? "Register" : "Login"}
        </Link>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : !isLogin ? "Register" : "Login"}
        </button>
      </div>
    </Form>
  );
}
