import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/landingPage/LandingPage';
import CreateCourse from '../pages/createCourse/CreateCourse';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import CourseList from '../pages/courseList/CoursesList';
import CoursePage from '../pages/course/CoursePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/create-course',
        element: <CreateCourse />,
      },
      {
        path: '/courses',
        element: <CourseList />
      },
      {
        path: '/course',
        element: <CoursePage />
      }
    ],
  },
]);

export default router;
