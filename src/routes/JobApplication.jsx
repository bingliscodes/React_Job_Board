import JobAppForm from "../components/JobAppForm";

export default function JobApplication() {
  return <JobAppForm />;
}

export async function action({ request, params }) {
  const searchParams = new URL(request.url).searchParams;
  const jobId = searchParams.get("jobId");

  const data = await request.formData();

  const appData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    resume: data.get("resume"),
  };

  return null;
}
