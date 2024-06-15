import React, { useContext } from 'react';
import ProgressBar from './components/ProgressBar';
import { UserContext } from '../../contexts/UserContext';

const Dashboard = () => {
    const { user } = useContext(UserContext)
    const enrolledCourses = [];

    return (
        <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className="py-24 max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl text-blue font-bold">Welcome, {user.name}!</h1>
                    <p className="text-xl mt-2">We're glad to have you back. Here's an overview of your learning progress.</p>
                </div>
                <div className='p-4 bg-white shadow-lg rounded-md'>
                    <h2 className="text-2xl text-blue font-semibold mb-4">Your Enrolled Courses</h2>
                    {enrolledCourses.length < 1 && (
                        <div className='text-xlg text-center p-5 border-2 font-bold'>No Cousre Enrolled</div>
                    )}

                    {enrolledCourses && (
                        <a href='' className="space-y-4">
                        {enrolledCourses.map((course, index) => (
                            <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
                                <h3 className="text-xl text-blue font-semibold">{course.title}</h3>
                                <p className="mt-2">
                                    Progress: {course.progress}% ({course.lessonsCompleted}/{course.totalLessons} lessons, {course.modulesCompleted}/{course.totalModules} modules)
                                </p>
                                <ProgressBar progress={course.progress} />
                            </div>
                            ))}
                        </a>
                    )}
                </div>
                <a href="/courses">
                    <button className='btn bg-blue text-white rounded-md w-full my-10 text-lg'>Explore More Courses</button>
                </a>
                {/* Additional features can be added here */}
            </div>
        </div>
    );
};

export default Dashboard;
