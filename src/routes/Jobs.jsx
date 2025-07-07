import { useState } from "react";
import JobsList from "../components/JobsList";
import JobSearch from "../components/JobSearch";

export default function Jobs() {
  const [searchText, setSearchText] = useState();

  return (
    <div>
      <h1>All Jobs</h1>
      <JobSearch setSearchText={setSearchText} />
      <JobsList searchText={searchText} />
    </div>
  );
}
