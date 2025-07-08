import { useContext } from "react";

import classes from "./JobFilters.module.css";

import { JobsContext } from "../store/JobsContext";

const JobFilter = () => {
  const { jobs } = useContext(JobsContext);

  const uniqueValues = {
    titles: new Set(),
    companies: new Set(),
    locations: new Set(),
  };
  jobs.forEach((job) => {
    uniqueValues.titles.add(job.title);
    uniqueValues.companies.add(job.company);
    uniqueValues.locations.add(job.location);
  });

  return <select></select>;
};

export default JobFilter;
