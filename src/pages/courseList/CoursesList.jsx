import React, { useState } from 'react';

const courses = [
  {
    id: 1,
    title: "Introduction to Programming",
    description: "Learn the basics of programming.",
    category: "Programming",
    difficulty: "Beginner",
    thumbnail: "link_to_image"
  },
  {
    id: 2,
    title: "Advanced Data Science",
    description: "Dive deep into data analysis.",
    category: "Data Science",
    difficulty: "Advanced",
    thumbnail: "link_to_image"
  },
  // Add more courses as needed
];

const CourseList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => {
    return (
      (selectedCategory === '' || course.category === selectedCategory) &&
      (selectedDifficulty === '' || course.difficulty === selectedDifficulty) &&
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       course.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Available Courses</h1>
      {/* Filters Section */}
      <div className="mb-6 flex space-x-4">
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="p-2 border rounded">
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Data Science">Data Science</option>
          <option value="Marketing">Marketing</option>
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
        {filteredCourses.map(course => (
          <div key={course.id} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">{course.category}</span>
            <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm ml-2">{course.difficulty}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
