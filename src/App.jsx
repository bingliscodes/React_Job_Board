import { RouterProvider, createBrowserRouter } from "react-router";
import RootLayout from "./routes/Root";
import JobsPage from "./routes/Jobs";
import JobDetailsPage, {
  loader as jobDetailsLoader,
} from "./routes/JobDetails";
import JobsRootLayout from "./routes/JobsRoot";
import NewJobPage, { action as newJobAction } from "./routes/NewJob";
import JobApplicationPage, {
  action as applicationAction,
} from "./routes/JobApplication";
import AuthPage, { action as authAction } from "./routes/Authentication";
import { JobsContextProvider } from "./store/JobsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      {
        path: "/",
        element: <JobsRootLayout />,
        children: [
          { index: true, element: <JobsPage /> },
          {
            path: ":jobId",
            id: "job-detail",
            loader: jobDetailsLoader,
            children: [
              {
                index: true,
                element: <JobDetailsPage />,
              },
              {
                path: "apply",
                id: "job-app",
                action: applicationAction,
                element: <JobApplicationPage />,
              },
            ],
          },

          {
            path: "new",
            id: "job-new",
            action: newJobAction,
            element: <NewJobPage />,
          },
        ],
      },
      {
        path: "auth",
        action: authAction,
        element: <AuthPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <JobsContextProvider>
      <RouterProvider router={router} />
    </JobsContextProvider>
  );
}
