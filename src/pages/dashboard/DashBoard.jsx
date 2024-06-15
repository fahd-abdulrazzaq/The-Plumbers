import React, { useContext } from 'react';
import ProgressBar from './components/ProgressBar';
import { UserContext } from '../../contexts/UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext)
  const enrolledCourses = [
    // Example data, should be fetched from API or context
    {
      title: "Introduction to Programming",
      progress: 50,
      modulesCompleted: 1,
      totalModules: 2,
      lessonsCompleted: 2,
      totalLessons: 4,
    },
    {
      title: "Advanced JavaScript",
      progress: 75,
      modulesCompleted: 3,
      totalModules: 4,
      lessonsCompleted: 6,
      totalLessons: 8,
    },
  ];

  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className="py-24 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Welcome, {user.name}!</h1>
          <p className="text-xl mt-2">We're glad to have you back. Here's an overview of your learning progress.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Enrolled Courses</h2>
          <div className="space-y-4">
            {enrolledCourses.map((course, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="mt-2">
                  Progress: {course.progress}% ({course.lessonsCompleted}/{course.totalLessons} lessons, {course.modulesCompleted}/{course.totalModules} modules)
                </p>
                <ProgressBar progress={course.progress} />
              </div>
            ))}
          </div>
        </div>
        {/* Additional features can be added here */}
      </div>
    </div>
  );
};

export default Dashboard;
