import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/landingPage/LandingPage';
import CreateCourse from '../pages/createCourse/CreateCourse';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import CourseList from '../pages/courseList/CoursesList';
import UserProfile from '../pages/UserProfile/UserProfile';
import Dashboard from '../pages/dashboard/DashBoard';

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
        path: 'dashboard',
        element: <Dashboard />
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
        path: '/profile',
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
