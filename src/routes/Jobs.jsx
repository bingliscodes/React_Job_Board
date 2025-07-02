import { JOBS } from "../assets/JobsList";

import JobsList from "../components/JobsList";

export default function Jobs() {
  return (
    <>
      <JobsList jobs={JOBS} />
    </>
  );
}
