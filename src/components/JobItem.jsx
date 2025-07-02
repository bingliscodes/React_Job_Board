import { Link } from "react-router";

import classes from "./JobItem.module.css";

export default function JobItem({ job }) {
  return (
    <article className={classes.job}>
      <h1>{job.title}</h1>
      <p>{job.details}</p>
      <p>
        <button>Apply Now!</button>
      </p>
      <Link to="..">Return to all jobs</Link>
    </article>
  );
}
