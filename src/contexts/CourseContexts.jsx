import React, { createContext, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { coursesRef, db } from '../auth/auth';

export const CoursesContext = createContext();

export const CoursesContextProvider = ({ children }) => {
  const [courses, setCourses] = useState({});

  const getAllCourses = async () => {
    const colRef = coursesRef;

    try {
      const coursesSnapshot = await getDocs(colRef);
      const courses = coursesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //console.log(courses);
      setCourses(courses);
    } catch (error) {
      console.error('Error fetching courses: ', error);
      throw error;
    }
  };

  const createCourse = async (course) => {
    const colRef = coursesRef;

    try {
      course = await addDoc(colRef, course);
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
