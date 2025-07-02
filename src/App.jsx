import { RouterProvider, createBrowserRouter } from "react-router";
import RootLayout from "./routes/Root";
import JobsPage from "./routes/Jobs";
import JobDetailsPage, {
  loader as jobDetailsLoader,
} from "./routes/JobDetails";
import JobsRootLayout from "./routes/JobsRoot";
import JobForm, { action as jobFormAction } from "./components/JobForm";
import AuthPage, { action as authAction } from "./routes/Authentication";

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
            children: [{ index: true, element: <JobDetailsPage /> }],
          },
          {
            path: "new",
            id: "job-new",
            action: jobFormAction,
            element: <JobForm />,
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
