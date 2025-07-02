import { JOBS } from "../assets/helperData";

import JobsList from "../components/JobsList";

export default function Jobs() {
  return <JobsList jobs={JOBS} />;
}
