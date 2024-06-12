import React, { useState } from 'react';

const CreateCourse = () => {
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [category, setCategory] = useState('');
    const [difficultyLevel, setDifficultyLevel] = useState('');
    const [thumbnailImage, setThumbnailImage] = useState(null);
    const [modules, setModules] = useState([{ title: '', description: '', lessons: [{ title: '', content: '' }] }]);
    const [quizzes, setQuizzes] = useState([{ title: '', description: '', questions: [{ text: '', type: 'Multiple Choice', options: ['', '', '', ''], correctAnswer: '' }] }]);


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
            quizzes
        };
        console.log('Course Data Submitted: ', courseData);
    };

    return (
        <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
            <div className="py-24">
                <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                    <h1 className="text-2xl text-blue font-semibold mb-6">Create a New Course</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Basic Information Section */}
                        <section className="p-4 border rounded-lg space-y-4">
                            <h2 className="text-lg text-blue font-medium">Course Information</h2>
                            <label className="block">
                                Course Title
                                <input type="text" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} className="mt-1 block w-full p-2 border rounded" required />
                            </label>
                            <label className="block">
                                Course Description
                                <textarea value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} className="mt-1 block w-full p-2 border rounded" required></textarea>
                            </label>
                            <label className="block">
                                Category
                                <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full p-2 border rounded" required>
                                    <option value="">Select Category</option>
                                    <option value="Programming">Programming</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                            </label>
                            <label className="block">
                                Difficulty Level
                                <select value={difficultyLevel} onChange={(e) => setDifficultyLevel(e.target.value)} className="mt-1 block w-full p-2 border rounded" required>
                                    <option value="">Select Difficulty Level</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </label>
                            <label className="block">
                                Thumbnail Image
                                <input type="file" onChange={(e) => setThumbnailImage(e.target.files[0])} className="mt-1 block w-full p-2 border rounded" required />
                            </label>
                        </section>

                        {/* Course Content Section */}
                        <section className="p-4 border rounded-lg space-y-4">
                            <h2 className="text-lg text-blue font-medium">Course Content</h2>
                            {modules.map((module, moduleIndex) => (
                                <div key={moduleIndex} className="space-y-4">
                                    <label className="block">
                                        Module Title
                                        <input type="text" value={module.title} onChange={(e) => {
                                            const newModules = modules.slice();
                                            newModules[moduleIndex].title = e.target.value;
                                            setModules(newModules);
                                        }} className="mt-1 block w-full p-2 border rounded" required />
                                    </label>
                                    <label className="block">
                                        Module Description
                                        <textarea value={module.description} onChange={(e) => {
                                            const newModules = modules.slice();
                                            newModules[moduleIndex].description = e.target.value;
                                            setModules(newModules);
                                        }} className="mt-1 block w-full p-2 border rounded" required></textarea>
                                    </label>

                                    {module.lessons.map((lesson, lessonIndex) => (
                                        <div key={lessonIndex} className="space-y-2">
                                            <label className="block">
                                                Lesson Title
                                                <input type="text" value={lesson.title} onChange={(e) => {
                                                    const newModules = modules.slice();
                                                    newModules[moduleIndex].lessons[lessonIndex].title = e.target.value;
                                                    setModules(newModules);
                                                }} className="mt-1 block w-full p-2 border rounded" required />
                                            </label>
                                            <label className="block">
                                                Lesson Content
                                                <textarea value={lesson.content} onChange={(e) => {
                                                    const newModules = modules.slice();
                                                    newModules[moduleIndex].lessons[lessonIndex].content = e.target.value;
                                                    setModules(newModules);
                                                }} className="mt-1 block w-full p-2 border rounded" required></textarea>
                                            </label>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => handleAddLesson(moduleIndex)} className="mt-2 border border-2 border-blue p-2 text-blue rounded-md">+ Add Another Lesson</button>
                                </div>
                            ))}
                            <button type="button" onClick={handleAddModule} className="mt-2 border border-2 border-blue p-2 text-blue rounded-md">+ Add Another Module</button>
                        </section>

                        {/* Assessment and Certification Section */}
                        <section className="p-4 border rounded-lg space-y-4">
                            <h2 className="text-lg text-blue font-medium">Quiz / Assessment</h2>
                            {quizzes.map((quiz, quizIndex) => (
                                <div key={quizIndex} className="space-y-4">
                                    <label className="block">
                                        Quiz Title
                                        <input type="text" value={quiz.title} onChange={(e) => {
                                            const newQuizzes = quizzes.slice();
                                            newQuizzes[quizIndex].title = e.target.value;
                                            setQuizzes(newQuizzes);
                                        }} className="mt-1 block w-full p-2 border rounded" required />
                                    </label>
                                    <label className="block">
                                        Quiz Description
                                        <textarea value={quiz.description} onChange={(e) => {
                                            const newQuizzes = quizzes.slice();
                                            newQuizzes[quizIndex].description = e.target.value;
                                            setQuizzes(newQuizzes);
                                        }} className="mt-1 block w-full p-2 border rounded" required></textarea>
                                    </label>

                                    {quiz.questions.map((question, questionIndex) => (
                                        <div key={questionIndex} className="space-y-2">
                                            <label className="block">
                                                Question Number
                                                <input type="text" value={question.text} onChange={(e) => {
                                                    const newQuizzes = quizzes.slice();
                                                    newQuizzes[quizIndex].questions[questionIndex].text = e.target.value;
                                                    setQuizzes(newQuizzes);
                                                }} className="mt-1 block w-full p-2 border rounded" required />
                                            </label>
                                            <label className="block">
                                                Question Type
                                                <select value={question.type} onChange={(e) => {
                                                    const newQuizzes = quizzes.slice();
                                                    newQuizzes[quizIndex].questions[questionIndex].type = e.target.value;
                                                    setQuizzes(newQuizzes);
                                                }} className="mt-1 block w-full p-2 border rounded" required>
                                                    <option value="Multiple Choice">Multiple Choice</option>
                                                    <option value="True/False">True/False</option>
                                                </select>
                                            </label>

                                            {question.type === 'Multiple Choice' && (
                                                <>
                                                    {question.options.map((option, optionIndex) => (
                                                        <label key={optionIndex} className="block">
                                                            Option {optionIndex + 1}
                                                            <input type="text" value={option} onChange={(e) => {
                                                                const newQuizzes = quizzes.slice();
                                                                newQuizzes[quizIndex].questions[questionIndex].options[optionIndex] = e.target.value;
                                                                setQuizzes(newQuizzes);
                                                            }} className="mt-1 block w-full p-2 border rounded" />
                                                        </label>
                                                    ))}
                                                    <button type="button" onClick={() => {
                                                        const newQuizzes = quizzes.slice();
                                                        newQuizzes[quizIndex].questions[questionIndex].options.push('');
                                                        setQuizzes(newQuizzes);
                                                    }} className="border border-2 border-blue p-2 text-blue rounded-md mt-2">+ Add Option</button>
                                                </>
                                            )}
                                            <label className="block">
                                                Correct Answer
                                                <input type="text" value={question.correctAnswer} onChange={(e) => {
                                                    const newQuizzes = quizzes.slice();
                                                    newQuizzes[quizIndex].questions[questionIndex].correctAnswer = e.target.value;
                                                    setQuizzes(newQuizzes);
                                                }} className="mt-1 block w-full p-2 border rounded" required />
                                            </label>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => handleAddQuestion(quizIndex)} className="border border-2 border-blue p-2 text-blue rounded-md mt-2">+ Add Another Question</button>
                                </div>
                            ))}
                            <button type="button" onClick={handleAddQuiz} className="mt-2 border border-2 border-blue p-2 text-blue rounded-md">+ Add Another Quiz</button>
                        </section>

                        {/* Submit and Review Section */}
                        <section className="flex justify-between p-4">
                            <button type="submit" className="bg-blue text-white px-4 py-2 rounded hover:bg-green-700">Submit for Review</button>
                            <button type="button" onClick={() => console.log('Save as Draft')} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-500">Save as Draft</button>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateCourse;
