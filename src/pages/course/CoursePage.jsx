import React, { useState } from 'react';
import LessonNavigation from './components/LessonNavigation';
import SidebarMenu from './components/SideBarMenu';

const courseData = {
  title: "Introduction to Programming",
  description: "A beginner's course on programming fundamentals.",
  category: "Programming",
  difficultyLevel: "Beginner",
  modules: [
    {
      title: "Module 1: Basics",
      lessons: [
        {
          title: "Lesson 1: What is Programming?",
          content: "<p>Programming is the process of creating a set of instructions that tell a computer how to perform a task...</p>",
        },
        {
          title: "Lesson 2: Programming Languages",
          content: "<p>A programming language is a formal language<b> comprising a set of instructions that produce various kinds of output...</p>",
        },
      ],
    },
    {
      title: "Module 2: Advanced Basics",
      lessons: [
        {
          title: "Lesson 1: Variables and Data Types",
          content: "<p>Variables are used to store data, and data types specify the type of data that can be stored...</p>",
        },
        {
          title: "Lesson 2: Control Structures",
          content: "<p>Control structures are constructs that allow you to dictate the flow of execution of the code...</p>",
        },
      ],
    },
  ],
};

const CoursePage = () => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const currentModule = courseData.modules[currentModuleIndex];
  const currentLesson = currentModule.lessons[currentLessonIndex];

  const handleNextLesson = () => {
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentModuleIndex < courseData.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(courseData.modules[currentModuleIndex - 1].lessons.length - 1);
    }
  };

  const handleSelectLesson = (moduleIndex, lessonIndex) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentLessonIndex(lessonIndex);
  };

  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className="py-24 flex max-w-6xl mx-auto">
        <SidebarMenu
          modules={courseData.modules}
          currentModuleIndex={currentModuleIndex}
          currentLessonIndex={currentLessonIndex}
          onSelectLesson={handleSelectLesson}
        />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
          <h2 className="text-xl mb-2">{currentModule.title}</h2>
          <h2 className="text-2xl mb-4">{currentLesson.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} className="prose lg:prose-xl"></div>
          <LessonNavigation
            onNext={handleNextLesson}
            onPrev={handlePrevLesson}
            disablePrev={currentModuleIndex === 0 && currentLessonIndex === 0}
            disableNext={currentModuleIndex === courseData.modules.length - 1 && currentLessonIndex === currentModule.lessons.length - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
