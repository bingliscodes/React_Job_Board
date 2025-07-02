import { createContext, useState } from "react";

import { JOBS } from "../assets/helperData";

export const JobsContext = createContext({
  jobs: [],
  addJob: () => {},
  removeJob: () => {},
});

export function JobsContextProvider({ children }) {
  const [jobs, setJobs] = useState(JOBS);

  function addJob(job) {
    setJobs((prevJobs) => [...prevJobs, job]);
  }

  function removeJob(jobId) {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  }

  const jobsContext = {
    jobs,
    addJob,
    removeJob,
  };
  return <JobsContext value={jobsContext}>{children}</JobsContext>;
}
