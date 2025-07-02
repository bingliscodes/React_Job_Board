import { RouterProvider, createBrowserRouter } from "react-router";
import RootLayout from "./routes/Root";
import JobsPage from "./routes/Jobs";
import JobDetailsPage, {
  loader as jobDetailsLoader,
} from "./routes/JobDetails";
import JobsRootLayout from "./routes/JobsRoot";
import HomePage from "./routes/Home";
import JobForm, { action as jobFormAction } from "./components/JobForm";
import LoginPage from "./routes/Login";
import { action as loginAction } from "./components/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "jobs",
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
        path: "login",
        id: "login",
        action: loginAction,
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
