import { Link } from "react-router";
import { useContext } from "react";
import { JobsContext } from "../store/JobsContext";

import classes from "./JobsList.module.css";

export default function JobsList() {
  const { jobs } = useContext(JobsContext);

  return (
    <div className={classes.jobs}>
      <h1>All Jobs</h1>
      <ul className={classes.list}>
        {jobs.map((job) => (
          <li key={job.id} className={classes.item}>
            <Link to={`${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
