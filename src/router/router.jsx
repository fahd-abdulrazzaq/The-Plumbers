import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/landingPage/landingPage';
import CreateCourse from '../pages/createCourse/CreateCourse';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import CourseList from '../pages/courseList/CoursesList';
<<<<<<< HEAD
import UserProfile from '../components/UserProfile';
=======
import CoursePage from '../pages/course/CoursePage';
>>>>>>> refs/remotes/origin/dev

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
        path: '/create-course',
        element: <CreateCourse />,
      },
      {
        path: '/courses',
<<<<<<< HEAD
        element: <CourseList />,
      },
      {
        path: '/profileUpdate',
        element: <UserProfile />,
      },
=======
        element: <CourseList />
      },
      {
        path: '/course',
        element: <CoursePage />
      }
>>>>>>> refs/remotes/origin/dev
    ],
  },
]);

export default router;
