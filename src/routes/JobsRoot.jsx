import { Outlet } from "react-router";

import JobsNavigation from "../components/JobsNavigation";

export default function JobsRootLayout() {
  return (
    <>
      <JobsNavigation />
      <Outlet />
    </>
  );
}
