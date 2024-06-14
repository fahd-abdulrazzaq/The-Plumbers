import React, { useState } from 'react';

const Quiz = ({ quiz }) => {
  const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
      {quiz.questions.map((question, index) => (
        <div key={index} className="mb-4">
          <p className="font-semibold">{question.text}</p>
          {question.type === 'Multiple Choice' && (
            question.options.map((option, optionIndex) => (
              <label key={optionIndex} className="block">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  disabled={submitted}
                />
                {option}
              </label>
            ))
          )}
        </div>
      ))}
      {!submitted ? (
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      ) : (
        <p className="text-green-500">Quiz submitted!</p>
      )}
    </div>
  );
};

export default Quiz;
