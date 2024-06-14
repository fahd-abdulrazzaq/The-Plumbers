import React from 'react';

const SidebarMenu = ({ modules, currentModuleIndex, currentLessonIndex, onSelectLesson, onSelectQuiz, isQuiz }) => {
  return (
    <div className="w-1/4 p-4 bg-gray-100 border-r">
      {modules.map((module, moduleIndex) => (
        <div key={moduleIndex} className="mb-4">
          <h3 className={`font-semibold ${currentModuleIndex === moduleIndex ? 'text-blue-500' : ''}`}>{module.title}</h3>
          <ul>
            {module.lessons.map((lesson, lessonIndex) => (
              <li
                key={lessonIndex}
                className={`pl-2 cursor-pointer ${currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex && !isQuiz ? 'bg-blue-100' : ''}`}
                onClick={() => onSelectLesson(moduleIndex, lessonIndex)}
              >
                {lesson.title}
              </li>
            ))}
            <li
              className={`pl-2 cursor-pointer ${currentModuleIndex === moduleIndex && isQuiz ? 'bg-blue-100' : ''}`}
              onClick={() => onSelectQuiz(moduleIndex)}
            >
              {module.quiz.title}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
