import classes from "./JobListFilters.module.css";
import { useContext } from "react";
import { JobsContext } from "../../store/JobsContext";
import Filter from "./Filter";

export default function JobListFilters() {
  const { filters, setFilters, jobs } = useContext(JobsContext);

  const titles = [...new Set(jobs.map((job) => job.title))];
  const companies = [...new Set(jobs.map((job) => job.company))];
  const locations = [...new Set(jobs.map((job) => job.location))];

  function handleSearchChange(e) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: e.target.value,
    }));
  }

  function handleTitleChange(selectedOptions) {
    const selectedTitles = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];

    setFilters((prevFilters) => ({
      ...prevFilters,
      titles: selectedTitles,
    }));
  }

  function handleCompanyChange(selectedOptions) {
    const selectedCompanies = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];

    setFilters((prevFilters) => ({
      ...prevFilters,
      companies: selectedCompanies,
    }));
  }

  function handleLocationChange(selectedOptions) {
    const selectedLocations = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];

    setFilters((prevFilters) => ({
      ...prevFilters,
      locations: selectedLocations,
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
      <Filter
        label="Job Title"
        data={titles}
        name="title"
        onChange={handleTitleChange}
      />
      <Filter
        label="Company"
        data={companies}
        name="company"
        onChange={handleCompanyChange}
      />
      <Filter
        label="Location"
        data={locations}
        name="location"
        onChange={handleLocationChange}
      />
    </div>
  );
}
