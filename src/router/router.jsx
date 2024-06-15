import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/landingPage/landingPage';
import CreateCourse from '../pages/createCourse/CreateCourse';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import CourseList from '../pages/courseList/CoursesList';
import UserProfile from '../components/UserProfile';

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
        element: <CourseList />,
      },
      {
        path: '/profileUpdate',
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
