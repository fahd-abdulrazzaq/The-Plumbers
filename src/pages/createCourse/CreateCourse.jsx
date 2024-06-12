import React, { useState } from 'react';

const CreateCourse = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [category, setCategory] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [modules, setModules] = useState([{ title: '', description: '', lessons: [{ title: '', content: '' }] }]);
  const [quizzes, setQuizzes] = useState([{ title: '', description: '', questions: [{ text: '', type: 'Multiple Choice', options: ['', '', '', ''], correctAnswer: '' }] }]);
  const [certificationEnabled, setCertificationEnabled] = useState(false);
  const [certificateTemplate, setCertificateTemplate] = useState(null);
  const [supplementaryMaterials, setSupplementaryMaterials] = useState(null);
  const [discussionForumEnabled, setDiscussionForumEnabled] = useState(false);
  const [plagiarismCheckEnabled, setPlagiarismCheckEnabled] = useState(false);

  const handleAddModule = () => {
    setModules([...modules, { title: '', description: '', lessons: [{ title: '', content: '' }] }]);
  };

  const handleAddLesson = (moduleIndex) => {
    const newModules = modules.slice();
    newModules[moduleIndex].lessons.push({ title: '', content: '' });
    setModules(newModules);
  };

  const handleAddQuiz = () => {
    setQuizzes([...quizzes, { title: '', description: '', questions: [{ text: '', type: 'Multiple Choice', options: ['', '', '', ''], correctAnswer: '' }] }]);
  };

  const handleAddQuestion = (quizIndex) => {
    const newQuizzes = quizzes.slice();
    newQuizzes[quizIndex].questions.push({ text: '', type: 'Multiple Choice', options: ['', '', '', ''], correctAnswer: '' });
    setQuizzes(newQuizzes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      courseTitle,
      courseDescription,
      category,
      difficultyLevel,
      thumbnailImage,
      modules,
      quizzes,
      certificationEnabled,
      certificateTemplate,
      supplementaryMaterials,
      discussionForumEnabled,
      plagiarismCheckEnabled
    };
    console.log('Course Data Submitted: ', courseData);
  };

  return (
    <div className="course-creation-page section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24">
      <h1>Create a New Course</h1>

<form onSubmit={handleSubmit}>
  {/* Basic Information Section */}
  <section className="basic-information">
    <h2>Basic Information</h2>
    <label>Course Title</label>
    <input type="text" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} required />
    <label>Course Description</label>
    <textarea value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} required></textarea>
    <label>Category</label>
    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
      <option value="">Select Category</option>
      <option value="Programming">Programming</option>
      <option value="Data Science">Data Science</option>
      <option value="Marketing">Marketing</option>
      {/* Add more categories as needed */}
    </select>
    <label>Difficulty Level</label>
    <select value={difficultyLevel} onChange={(e) => setDifficultyLevel(e.target.value)} required>
      <option value="">Select Difficulty Level</option>
      <option value="Beginner">Beginner</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Advanced">Advanced</option>
    </select>
    <label>Thumbnail Image</label>
    <input type="file" onChange={(e) => setThumbnailImage(e.target.files[0])} required />
  </section>

  {/* Course Content Section */}
  <section className="course-content">
    <h2>Course Content</h2>
    {modules.map((module, moduleIndex) => (
      <div key={moduleIndex} className="module">
        <label>Module Title</label>
        <input type="text" value={module.title} onChange={(e) => {
          const newModules = modules.slice();
          newModules[moduleIndex].title = e.target.value;
          setModules(newModules);
        }} required />
        <label>Module Description</label>
        <textarea value={module.description} onChange={(e) => {
          const newModules = modules.slice();
          newModules[moduleIndex].description = e.target.value;
          setModules(newModules);
        }} required></textarea>

        {module.lessons.map((lesson, lessonIndex) => (
          <div key={lessonIndex} className="lesson">
            <label>Lesson Title</label>
            <input type="text" value={lesson.title} onChange={(e) => {
              const newModules = modules.slice();
              newModules[moduleIndex].lessons[lessonIndex].title = e.target.value;
              setModules(newModules);
            }} required />
            <label>Lesson Content</label>
            <textarea value={lesson.content} onChange={(e) => {
              const newModules = modules.slice();
              newModules[moduleIndex].lessons[lessonIndex].content = e.target.value;
              setModules(newModules);
            }} required></textarea>
          </div>
        ))}
        <button type="button" onClick={() => handleAddLesson(moduleIndex)}>+ Add Another Lesson</button>
      </div>
    ))}
    <button type="button" onClick={handleAddModule}>+ Add Another Module</button>
  </section>

  {/* Assessment and Certification Section */}
  <section className="assessment-certification">
    <h2>Assessment and Certification</h2>
    {quizzes.map((quiz, quizIndex) => (
      <div key={quizIndex} className="quiz">
        <label>Quiz Title</label>
        <input type="text" value={quiz.title} onChange={(e) => {
          const newQuizzes = quizzes.slice();
          newQuizzes[quizIndex].title = e.target.value;
          setQuizzes(newQuizzes);
        }} required />
        <label>Quiz Description</label>
        <textarea value={quiz.description} onChange={(e) => {
          const newQuizzes = quizzes.slice();
          newQuizzes[quizIndex].description = e.target.value;
          setQuizzes(newQuizzes);
        }} required></textarea>

        {quiz.questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question">
            <label>Question Text</label>
            <input type="text" value={question.text} onChange={(e) => {
              const newQuizzes = quizzes.slice();
              newQuizzes[quizIndex].questions[questionIndex].text = e.target.value;
              setQuizzes(newQuizzes);
            }} required />
            <label>Question Type</label>
            <select value={question.type} onChange={(e) => {
              const newQuizzes = quizzes.slice();
              newQuizzes[quizIndex].questions[questionIndex].type = e.target.value;
              setQuizzes(newQuizzes);
            }} required>
              <option value="Multiple Choice">Multiple Choice</option>
              <option value="True/False">True/False</option>
            </select>
            {question.type === 'Multiple Choice' && (
              <>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <label>Option {optionIndex + 1}</label>
                    <input type="text" value={option} onChange={(e) => {
                      const newQuizzes = quizzes.slice();
                      newQuizzes[quizIndex].questions[questionIndex].options[optionIndex] = e.target.value;
                      setQuizzes(newQuizzes);
                    }} required />
                  </div>
                ))}
              </>
            )}
            <label>Correct Answer</label>
            <input type="text" value={question.correctAnswer} onChange={(e) => {
              const newQuizzes = quizzes.slice();
              newQuizzes[quizIndex].questions[questionIndex].correctAnswer = e.target.value;
              setQuizzes(newQuizzes);
            }} required />
          </div>
        ))}
        <button type="button" onClick={() => handleAddQuestion(quizIndex)}>+ Add Another Question</button>
      </div>
    ))}
    <button type="button" onClick={handleAddQuiz}>+ Add Another Quiz</button>

    <label>Certification</label>
    <input type="checkbox" checked={certificationEnabled} onChange={(e) => setCertificationEnabled(e.target.checked)} />
    {certificationEnabled && (
      <>
        <label>Certificate Template</label>
        <input type="file" onChange={(e) => setCertificateTemplate(e.target.files[0])} />
      </>
    )}
  </section>

  {/* Additional Resources Section */}
  <section className="additional-resources">
    <h2>Additional Resources</h2>
    <label>Supplementary Materials</label>
    <input type="file" onChange={(e) => setSupplementaryMaterials(e.target.files[0])} />

    <label>Discussion Forum</label>
    <input type="checkbox" checked={discussionForumEnabled} onChange={(e) => setDiscussionForumEnabled(e.target.checked)} />

    <label>Plagiarism Check</label>
    <input type="checkbox" checked={plagiarismCheckEnabled} onChange={(e) => setPlagiarismCheckEnabled(e.target.checked)} />
  </section>

  {/* Submit and Review Section */}
  <section className="submit-review">
    <button type="submit">Submit for Review</button>
    <button type="button" onClick={() => console.log('Save as Draft')}>Save as Draft</button>
  </section>
</form>
      </div>
    </div>
  );
};

export default CreateCourse;
