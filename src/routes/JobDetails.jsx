import { useRouteLoaderData } from "react-router";
import JobItem from "../components/JobItem";
import { JOBS } from "../assets/helperData";

export default function JobDetails() {
  const id = useRouteLoaderData("job-detail");
  return <JobItem job={JOBS.filter((job) => job.id === id)[0]} />;
}

export async function loader({ params }) {
  return params.jobId;
}
