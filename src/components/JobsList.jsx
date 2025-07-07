import { Link } from "react-router";
import { useContext } from "react";
import { JobsContext } from "../store/JobsContext";

import classes from "./JobsList.module.css";

export default function JobsList({ searchText }) {
  const { jobs } = useContext(JobsContext);
  let filteredJobs = [...jobs];
  if (searchText) {
    filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchText.toLowerCase())
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
