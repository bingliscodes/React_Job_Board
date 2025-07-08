import { Link } from "react-router";

import classes from "./JobItem.module.css";

export default function JobItem({ job }) {
  return (
    <article className={classes.job}>
      <h1>{job.title}</h1>
      <p>
        <h3>Job Description:</h3> {job.description}
      </p>
      <p>
        <h3>Company:</h3> {job.company}
      </p>
      <p>
        <h3>Location:</h3> {job.location}
      </p>
      <p>
        <div className={classes.actions}>
          <button>
            <Link to="apply">Apply Now!</Link>
          </button>
        </div>
      </p>
      <Link to="..">Return to all jobs</Link>
    </article>
  );
}
