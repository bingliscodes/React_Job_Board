import { useContext } from "react";

import { JobsContext } from "../store/JobsContext";
import JobsList from "../components/JobList/JobList";
import JobListFilters from "../components/JobList/JobListFilters";

export default function Jobs() {
  const { filters, setFilters } = useContext(JobsContext);

  function handleSearchChange(search) {
    setFilters((prevFilters) => ({ ...prevFilters, search }));
  }

  return (
    <div>
      <h1>All Jobs</h1>
      <JobListFilters onSearchChange={handleSearchChange} />
      <JobsList searchText={filters.search && undefined} />
    </div>
  );
}
