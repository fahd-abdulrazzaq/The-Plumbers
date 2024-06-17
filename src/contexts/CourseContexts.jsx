import React, { createContext, useState } from 'react';

export const CoursesContext = createContext();

export const CoursesContextProvider = ({ children }) => {
  const [courses, setCourses] = useState(null);

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};
