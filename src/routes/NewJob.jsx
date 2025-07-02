import { redirect } from "react-router";

import JobForm from "../components/JobForm";

export default function NewJob() {
  return <JobForm />;
}

export async function action({ request }) {
  const data = await request.formData();
  const id = `job-${Math.random().toString(16).slice(2)}`;
  const jobData = {
    title: data.get("title"),
    description: data.get("description"),
    id,
  };

  return jobData;
}
