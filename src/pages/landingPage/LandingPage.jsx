import React, { useContext, useEffect } from 'react'
import Banner from './components/Banner'
import Features from './components/Features'
import Procedure from './components/Procedure'
import { CoursesContext } from '../../contexts/CourseContexts'

export default function LandingPage() {
  const { courses, getAllCourses } = useContext(CoursesContext)

  useEffect(() => {
    getAllCourses()
  }, [])

  return (
    <div>
        <Banner />
        <Features />
        <Procedure />
    </div>
  )
}
