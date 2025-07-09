import { createContext, useState } from "react";

import { JOBS } from "../assets/helperData";

export const JobsContext = createContext({
  jobs: [],
  addJob: (job) => {},
  removeJob: (id) => {},
  filterJobs: (searchText) => {},
  filters: {},
});

export function JobsContextProvider({ children }) {
  const [jobs, setJobs] = useState(JOBS);
  const [filters, setFilters] = useState({
    search: "",
    titles: [],
    companies: [],
    locations: [],
  });

  function addJob(job) {
    setJobs((prevJobs) => [job, ...prevJobs]);
  }

  function removeJob(jobId) {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  }

  function filterJobs(searchText) {
    if (searchText) {
      setJobs((prevJobs) =>
        prevJobs.filter((job) =>
          job.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }

  const jobsContext = {
    jobs,
    addJob,
    removeJob,
    filterJobs,
    filters,
    setFilters,
  };

  return <JobsContext value={jobsContext}>{children}</JobsContext>;
}
