import { createContext, useState, useMemo } from "react";

import { JOBS } from "../assets/helperData";

export const JobsContext = createContext({
  jobs: [],
  addJob: (job) => {},
  removeJob: (id) => {},
  filteredJobs: [],
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

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        filters.search === "" ||
        job.title.toLowerCase().includes(filters.search.toLowerCase());

      const matchesTitle =
        filters.titles.length === 0 || filters.titles.includes(job.title);

      const matchesCompany =
        filters.companies.length === 0 ||
        filters.companies.includes(job.company);

      const matchesLocation =
        filters.locations.length === 0 ||
        filters.locations.includes(job.location);

      return matchesSearch && matchesTitle && matchesCompany && matchesLocation;
    });
  }, [jobs, filters]);

  const jobsContext = {
    jobs,
    addJob,
    removeJob,
    filters,
    setFilters,
    filteredJobs,
  };

  return <JobsContext value={jobsContext}>{children}</JobsContext>;
}
