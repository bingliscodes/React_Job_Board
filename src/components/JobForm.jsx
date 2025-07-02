import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  redirect,
} from "react-router";

import classes from "./JobForm.module.css";

export default function JobForm({ event }) {
  const actionData = useActionData();
  const navigation = useNavigation();
  const nav = useNavigate();

  const isSubmitting = navigation.state === "submitting";

  function handleCancel() {
    nav("..");
  }
  return (
    <Form method="POST" className={classes.form}>
      <p>
        <label htmlFor="title">Job Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Job Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={handleCancel} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();

  const jobData = {
    title: data.get("title"),
    description: data.get("description"),
  };

  console.log(jobData);

  return redirect("..");
}
