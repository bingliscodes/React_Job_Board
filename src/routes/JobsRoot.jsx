import { Outlet } from "react-router";

import JobsNavigation from "../components/JobsNavigation";
import PageContent from "../components/PageContent";

export default function JobsRootLayout() {
  return (
    <>
      <PageContent title="Welcome!">
        <p>Browse all of our amazing Jobs!</p>
        <JobsNavigation />
        <Outlet />
      </PageContent>
    </>
  );
}
