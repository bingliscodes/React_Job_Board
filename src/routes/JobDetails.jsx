import { useRouteLoaderData } from "react-router";
import JobItem from "../components/JobItem";
import { useContext } from "react";
import { JobsContext } from "../store/JobsContext";

export default function JobDetails() {
  const id = useRouteLoaderData("job-detail");
  const { jobs } = useContext(JobsContext);
  return <JobItem job={jobs.filter((job) => job.id === id)[0]} />;
}

export async function loader({ params }) {
  return params.jobId;
}
