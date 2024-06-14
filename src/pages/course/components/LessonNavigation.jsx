import React from 'react';

const LessonNavigation = ({ onNext, onPrev, disablePrev, disableNext }) => {
  return (
    <div className="flex justify-between mt-4">
      <button onClick={onPrev} disabled={disablePrev} className="px-4 py-2 bg-blue text-white rounded disabled:opacity-50">
        Previous Lesson
      </button>
      <button onClick={onNext} disabled={disableNext} className="px-4 py-2 bg-blue text-white rounded disabled:opacity-50">
        Next Lesson
      </button>
    </div>
  );
};

export default LessonNavigation;
