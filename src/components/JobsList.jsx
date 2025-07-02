import { Link } from "react-router";

import classes from "./JobsList.module.css";

export default function JobsList({ jobs }) {
  console.log(jobs);
  return (
    <div className={classes.jobs}>
      <h1>All Jobs</h1>
      <ul className={classes.list}>
        {jobs.map((job) => (
          <li key={job.id} className={classes.item}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
