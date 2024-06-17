import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/landingPage/LandingPage';
import CreateCourse from '../pages/createCourse/CreateCourse';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import CourseList from '../pages/courseList/CoursesList';
import CoursePage from '../pages/course/CoursePage'
import UserProfile from '../pages/UserProfile/UserProfile';
import Dashboard from '../pages/dashboard/DashBoard';
import ProtectedRoute from '../pages/Auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
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
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/create-course',
        element: (
          <ProtectedRoute>
            <CreateCourse />,
          </ProtectedRoute>
        ),
      },
      {
        path: '/courses',
        element: <CourseList />,
      },
      {
        path: '/courses/:id',
        element: <CoursePage />
      },
      {
        path: '/profile',

        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
