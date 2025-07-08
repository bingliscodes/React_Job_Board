import { Link } from "react-router";
import { useContext } from "react";
import { JobsContext } from "../../store/JobsContext";

import classes from "./JobList.module.css";

export default function JobsList() {
  const { jobs, filters } = useContext(JobsContext);

  let filteredJobs = [...jobs];
  if (filteredJobs.search !== "") {
    filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

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
