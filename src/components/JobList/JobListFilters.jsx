import classes from "./JobListFilters.module.css";
import { useContext } from "react";
import { JobsContext } from "../../store/JobsContext";

export default function JobListFilters() {
  const { filters, setFilters } = useContext(JobsContext);

  function handleSearchChange(e) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: e.target.value,
    }));
  }
  return (
    <div className={classes.jobs}>
      <input
        className={classes.input}
        type="text"
        value={filters.search}
        onChange={handleSearchChange}
        placeholder="Search jobs"
      />
    </div>
  );
}
