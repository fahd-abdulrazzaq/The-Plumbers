import React from 'react';

const SidebarMenu = ({ modules, currentModuleIndex, currentLessonIndex, onSelectLesson }) => {
  return (
    <div className="w-64 p-4 bg-gray-100 border-r">
      <h3 className="text-xl font-semibold mb-4">Course Outline</h3>
      {modules.map((module, moduleIndex) => (
        <div key={moduleIndex} className="mb-4">
          <h4 className="text-lg font-medium">{module.title}</h4>
          <ul className="pl-4">
            {module.lessons.map((lesson, lessonIndex) => {
              const isActive = currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex;
              return (
                <li
                  key={lessonIndex}
                  className={`cursor-pointer p-2 rounded ${isActive ? 'bg-blue text-white' : ''} text-gray-700`}
                  onClick={() => onSelectLesson(moduleIndex, lessonIndex)}
                >
                  {lesson.title}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
