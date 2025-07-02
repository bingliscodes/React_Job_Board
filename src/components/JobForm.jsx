import { useNavigate, Form, useNavigation, useActionData } from "react-router";
import { useContext, useEffect, useRef } from "react";

import { JobsContext } from "../store/JobsContext";
import classes from "./JobForm.module.css";

export default function JobForm() {
  const { jobs, addJob } = useContext(JobsContext);
  const navigation = useNavigation();
  const data = useActionData();
  const nav = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  // Prevent multiple addJob() calls
  const hasAdded = useRef(false);

  useEffect(() => {
    if (data && !hasAdded.current) {
      addJob(data);
      hasAdded.current = true;
      console.log(jobs);
      nav("..");
    }
  }, [data, addJob, nav]);

  function handleCancel() {
    nav("..");
  }
  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Job Title</label>
        <input id="title" type="text" name="title" required />
      </p>
      <p>
        <label htmlFor="description">Job Description</label>
        <textarea id="description" name="description" rows="5" required />
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
