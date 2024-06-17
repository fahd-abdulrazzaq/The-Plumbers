import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/landingPage/LandingPage';
import CreateCourse from '../pages/createCourse/CreateCourse';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import CourseList from '../pages/courseList/CoursesList';
import UserProfile from '../pages/UserProfile/UserProfile';
import Dashboard from '../pages/dashboard/DashBoard';
import ProtectedRoute from '../pages/Auth/ProtectedRoute';
import ErrorPage from '../pages/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: '/profile',

        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
