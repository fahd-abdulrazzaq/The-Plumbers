import React, { createContext, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../auth/auth';

export const CoursesContext = createContext();

export const CoursesContextProvider = ({ children }) => {
  const [courses, setCourses] = useState(null);

  const getAllCourses = async () => {
    const colRef = collection(db, 'courses');
  
    try {
      const coursesSnapshot = await getDocs(colRef);
      const courses = coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      //console.log(courses);
      setCourses(courses)
    } catch (error) {
      console.error('Error fetching courses: ', error);
      throw error;
    }
  };
  

  return (
    <CoursesContext.Provider value={{ courses, setCourses, getAllCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};
