import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import { getAuth } from 'firebase/auth';
import app, { db } from '../../auth/auth';
import { doc, getDoc } from 'firebase/firestore';
import { UserContext } from '../../contexts/UserContext';
import ToggLable from '../../components/ToggLable';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const navigate = useNavigate();

  // feching of the data
  const fetchUserData = async () => {
    const auth = getAuth(app);
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        toast.error('User did not logged in', {
          position: 'top-center',
          autoClose: 2000,
        });
        console.log('user did not logged in');
      }
    });
  };

  useEffect(() => {
    if (user?.enrolledCourses) {
      setEnrolledCourses(user.enrolledCourses);
    } else {
      setEnrolledCourses([]);
    }
    fetchUserData();
  }, [user]);

  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className='py-24 max-w-6xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-4xl text-blue font-bold'>
            Welcome, {user?.firstName}!
          </h1>
          <p className='text-xl mt-2 mb-10'>
            We're glad to have you back. Here's an overview of your learning
            progress.
          </p>

          <ToggLable buttonLabel='View profile'>
            <div className='flex flex-col items-center shadow-md text-blue md:text-xl w-[80%] lg:w-[50%] mx-auto'>
              <div className='w-24 h-24 mb-10'>
                <img
                  src={user?.profileImage}
                  alt='profile image'
                  className='bg-cover rounded-full w-[100%] h-[100%]'
                />
              </div>
              <div className='text-left'>
                <p className='my-1'>First Name: {user?.firstName}</p>
                <hr />
                <p className='my-1'>Last Name: {user?.lastName}</p>
                <hr />
                <p>Email: {user?.email}</p>
              </div>

              <div className=' bg-blue text-white rounded-md p-2 my-5'>
                <button onClick={() => navigate('/profile')}>
                  Update profile
                </button>
              </div>
            </div>
          </ToggLable>
        </div>
        <div className='p-4 bg-white shadow-lg rounded-md'>
          <h2 className='text-2xl text-blue font-semibold mb-4'>
            Your Enrolled Courses
          </h2>
          {enrolledCourses.length < 1 && (
            <div className='text-xlg text-center p-5 border-2 font-bold'>
              No Cousre Enrolled
            </div>
          )}

          {enrolledCourses && (
            <div className='space-y-4'>
              {enrolledCourses.map((course, index) => (
                <div
                  key={index}
                  className='flex justify-between align-center p-4 border rounded-lg shadow-sm bg-white'
                >
                  <div>
                    <h3 className='text-xl text-blue font-semibold'>
                      {course.title}
                    </h3>
                    {/*<p className='mt-2'>
                    Progress: {course.progress}% ({course.lessonsCompleted}/
                    {course.totalLessons} lessons, {course.modulesCompleted}/
                    {course.totalModules} modules)
                  </p>
                  <ProgressBar progress={course.progress} />*/}
                  </div>
                  <a href={`/courses/${course.id}`}
                    className='btn bg-blue text-white end rounded-md'>
                    Go to Course Page
                  </a>
                </div>

              ))}
            </div>
          )}
        </div>
        <a href='/courses'>
          <button className='btn bg-blue text-white rounded-md w-full my-10 text-lg'>
            Explore More Courses
          </button>
        </a>
        {/* Additional features can be added here */}
      </div>
    </div>
  );
};

export default Dashboard;
