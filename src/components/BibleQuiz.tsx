import React, { useState } from 'react';

const questions = [
  {
    question: "Who was the first man created according to the Bible?",
    options: ["Noah", "Adam", "Abraham", "Moses"],
    correctAnswer: "Adam"
  },
  {
    question: "Which book of the Bible tells the story of Jesus' birth?",
    options: ["Matthew", "Mark", "Luke", "John"],
    correctAnswer: "Luke"
  },
  // Add more questions here
];

const BibleQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="text-center">
      {showScore ? (
        <div>
          <h2 className="text-2xl mb-4">You scored {score} out of {questions.length}</h2>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
            }}
            className="bg-purple-700 text-white px-4 py-2 rounded"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl mb-4">Question {currentQuestion + 1}</h2>
          <p className="mb-4">{questions[currentQuestion].question}</p>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="w-full bg-gray-800 text-white p-2 rounded"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BibleQuiz;