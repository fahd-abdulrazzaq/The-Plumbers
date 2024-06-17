import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import app, { db } from '../../auth/auth';
import { getAuth } from 'firebase/auth';

const CourseList = () => {
  const { user, setUser } = useContext(UserContext);
  const [courses, setCourses] = useState([])

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
    fetch('/json/courses.json').then(res => res.json()).then(data => {
      setCourses(data)
    })
  }, [])


  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredCourses = courses.filter(course => {
    return (
      (selectedCategory === '' || course.category === selectedCategory) &&
      (selectedDifficulty === '' || course.difficultyLevel === selectedDifficulty) &&
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const coursesToShow = showAll ? filteredCourses : filteredCourses.slice(0, 10);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };

  const handleEnroll = async (course, id) => {
    const auth = getAuth(app);
    const userRef = doc(db, 'users', auth.currentUser.uid);

    try {
      await updateDoc(userRef, {
        enrolledCourses: arrayUnion({
          id: id,
          title: course.title,
          // Will Include other relevant course data properties here later
        })
      });
      console.log('Course enrolled successfully!');
    } catch (error) {
      console.error('Error enrolling course:', error);
      // Handle enrollment error (e.g., toast notification)
    }
  };


  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className="p-24 max-w-6xl mx-auto">
        <h1 className="text-2xl text-blue font-semibold mb-6">Available Courses</h1>
        {/* Filters Section */}
        <div className="mb-6 flex space-x-4">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="p-2 border rounded">
            <option value="">All Categories</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="Web Development">Web Development</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Game Development">Game Development</option>
            <option value="Project Management">Project Management</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
          <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)} className="p-2 border rounded">
            <option value="">All Difficulty Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded flex-grow"
          />
        </div>
        {/* Courses Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesToShow.map((course, index) => (
            <a href={`/courses/${index}`} key={index} className="p-4 border rounded-lg shadow hover:shadow-lg transition relative">
              <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover rounded mb-4" />
              <h2 className="text-xl text-blue font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <span className="inline-block bg-blue-100 text-blue px-2 py-1 rounded-full text-sm">{course.category}</span>
              <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm ml-2 mb-5">{course.difficulty}</span>
              <button
                onClick={() => handleEnroll(course, index)}
                className='btn bg-blue text-white absolute bottom-4 left-4 right-4'>
                Enroll
              </button>
            </a>
          ))}
        </div>
        {/* Show More / Show Less Button */}
        <div className="mt-6 text-center">
          <button onClick={handleToggleShow} className="px-4 py-2 bg-blue text-white rounded hover:bg-gray-500">
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
