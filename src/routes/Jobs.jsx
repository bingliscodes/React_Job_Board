import { useContext } from "react";
import { JobsContext } from "../store/JobsContext";

import JobsList from "../components/JobsList";

export default function Jobs() {
  const { jobs } = useContext(JobsContext);
  return <JobsList jobs={jobs} />;
}
