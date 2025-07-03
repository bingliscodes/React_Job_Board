import {
  Form,
  useNavigation,
  useActionData,
  useSearchParams,
} from "react-router";

import classes from "./AuthForm.module.css";

export default function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" className={classes.form}>
      <h1>Application</h1>
      {data && data.errors && (
        <ul>
          {data.errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}

      <p>
        <input
          placeholder="First Name"
          id="firstName"
          type="text"
          name="firstName"
          required
        />
      </p>
      <p>
        <input
          placeholder="Last Name"
          id="lastName"
          type="text"
          name="lastName"
          required
        />
      </p>
      <p>
        <input
          placeholder="Email address"
          id="email"
          type="email"
          name="email"
          required
        />
      </p>
      <p style={{ textAlign: "left" }}>Select file to upload</p>
      <input type="file" id="file" name="resume" />
      <div className={classes.actions}>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </Form>
  );
}
