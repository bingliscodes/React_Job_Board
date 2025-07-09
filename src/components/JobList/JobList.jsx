import { Link } from "react-router";
import { useContext } from "react";
import { JobsContext } from "../../store/JobsContext";

import classes from "./JobList.module.css";

export default function JobsList() {
  const { filteredJobs } = useContext(JobsContext);

  console.log(filteredJobs);
  return (
    <div className={classes.jobs}>
      <ul className={classes.list}>
        {filteredJobs.map((job) => (
          <li key={job.id} className={classes.item}>
            <Link to={`${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
