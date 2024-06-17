import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { UserContextProvider } from './contexts/UserContext';
import { CoursesContextProvider } from './contexts/CourseContexts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CoursesContextProvider>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </CoursesContextProvider>
);
