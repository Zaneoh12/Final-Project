
'use client';

import { useState } from "react";
import Layout from "./layout"; 

const Page = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answerFeedback, setAnswerFeedback] = useState(""); 

  
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "What is my name?",
      options: ["Megan", "Maddy", "James", "Zane"],
      answer: "Zane"
    },
    {
      question: "What class is this?",
      options: ["Mobile development", "Math", "OOP3", "Web dev 2"],
      answer: "Web dev 2"
    },
    {
      question: "What school is this?",
      options: ["UofC", "UBC", "MRU", "SAIT"],
      answer: "SAIT"
    },
    {
      question: "What is SAIT's sports team's name?",
      options: ["Grizzles", "Ravens", "Coyotes", "Trojans"],
      answer: "Trojans"
    },
    {
      question: "Who is your favourite student?",
      options: ["Zane", "ZANE", "not zane", "zane"],
      answer: "not zane"
    },
  ];

  
  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
      setAnswerFeedback("Correct!"); 
    } else {
      setAnswerFeedback("Incorrect!");
    }


    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setAnswerFeedback(""); 
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000); 
    } else {
      setTimeout(() => {
        setQuizCompleted(true); 
      }, 1000);
    }
  };

  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setAnswerFeedback(""); 
  };

  return (
    <Layout>
      {!quizCompleted ? (
        <div className="quiz-container">
          <h1>Quiz</h1>
          <h3>{questions[currentQuestionIndex].question}</h3>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          <p>Score: {score}</p>

          {/* Show feedback (Correct or Incorrect) */}
          {answerFeedback && <p className="feedback">{answerFeedback}</p>}
        </div>
      ) : (
        <div className="quiz-container">
          <h1>Quiz Completed</h1>
          <p>Your final score is: {score} out of {questions.length}</p>
          {/* Button to restart the quiz */}
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      )}
    </Layout>
  );
};

export default Page;
