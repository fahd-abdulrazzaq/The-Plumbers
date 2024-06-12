import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/landingPage/LandingPage";
import CreateCourse from "../pages/createCourse/CreateCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/create-course",
        element: <CreateCourse />
      }
    ],
  },
]);

export default router;
