import { useRouteLoaderData } from "react-router";
import JobItem from "../components/JobItem";
import { JOBS } from "../assets/JobsList";

export default function JobDetails() {
  const id = useRouteLoaderData("job-detail");
  return <JobItem job={JOBS.filter((job) => job.id === id)[0]} />;
}

export async function loader({ request, params }) {
  return params.jobId;
}
