import React, { useEffect, useState } from 'react';
import LessonNavigation from './components/LessonNavigation';
import SidebarMenu from './components/SideBarMenu';
import Quiz from './components/Quiz';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { id } = useParams();

  const [courses, setCourses] = useState([]);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isQuiz, setIsQuiz] = useState(false);

  useEffect(() => {
    fetch('/json/courses.json')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        // Handle error or set appropriate state indicating error
      });
  }, []);

  // Ensure courseData is defined before accessing properties
  const courseData = courses[id];

  if (!courseData) {
    return <p>Loading...</p>; // Add loading state or error handling
  }

  const currentModule = courseData.modules[currentModuleIndex];
  const currentLesson = currentModule.lessons[currentLessonIndex];

  const handleNextLesson = () => {
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setIsQuiz(false);
    } else if (currentModuleIndex < courseData.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
      setIsQuiz(false);
    } else {
      setIsQuiz(true);
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      setIsQuiz(false);
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(courseData.modules[currentModuleIndex - 1].lessons.length - 1);
      setIsQuiz(false);
    }
  };

  const handleSelectLesson = (moduleIndex, lessonIndex) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentLessonIndex(lessonIndex);
    setIsQuiz(false);
  };

  const handleSelectQuiz = moduleIndex => {
    setCurrentModuleIndex(moduleIndex);
    setIsQuiz(true);
  };

  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className="py-24 flex max-w-6xl mx-auto">
        <SidebarMenu
          modules={courseData.modules}
          currentModuleIndex={currentModuleIndex}
          currentLessonIndex={currentLessonIndex}
          onSelectLesson={handleSelectLesson}
          onSelectQuiz={handleSelectQuiz}
          isQuiz={isQuiz}
        />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
          <h2 className="text-xl font-bold mb-4">{currentModule.title}</h2>
          {isQuiz ? (
            <Quiz quiz={currentModule.quiz} />
          ) : (
            <>
              <h2 className="text-2xl mb-2">{currentLesson.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} className="prose lg:prose-xl"></div>
            </>
          )}
          <LessonNavigation
            onNext={handleNextLesson}
            onPrev={handlePrevLesson}
            disablePrev={currentModuleIndex === 0 && currentLessonIndex === 0}
            disableNext={currentModuleIndex === courseData.modules.length - 1 && currentLessonIndex === currentModule.lessons.length - 1 && isQuiz}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
