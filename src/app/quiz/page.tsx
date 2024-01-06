"use client";
import { useState } from "react";

import { quiz } from "../data";

import Result from "../components/result/Result";
import Answers from "../components/answers/Answers";
import TimerProgress from "../components/timerProgress/TimerProgress";
import StatusCircle from "../components/statuCircle/StatusCircle";
//import { getBGColor } from "../utils/helper";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);

  const [wrongId, setWrongId] = useState<number[]>([]);
  const [correctId, setCorrectId] = useState<number[]>([]);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const [time, setTime] = useState(0);

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer: string, idx: number): void => {
    setTimeout(() => {
      setTime(5);
    }, 1000);
    setSelectedAnswer(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setCorrectId((prev) => [...prev, questions[activeQuestion].id]);
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
      setWrongId((prev) => [...prev, questions[activeQuestion].id]);
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    if (!selectedAnswer) {
      setWrongId((prev) => [...prev, questions[activeQuestion].id]);
      setSelectedAnswer(false);
    }
    setResult((prev) =>
      selectedAnswer
        ? { ...prev, score: prev.score + 5, correctAnswers: prev.correctAnswers + 1 }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setSelectedAnswer(false);
  };

  const handleTime = (time: number) => {
    setTime(time);
  };

  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-blue-50'>
      {!showResult ? (
        <div className='container flex flex-col w-1/2 justify-center items-center gap-14 '>
          <div className='question-box bg-blue-300 rounded-md w-3/4 flex justify-center p-5 font-bold'>
            <p className='question'>{question}</p>
          </div>
          <TimerProgress onTimeout={nextQuestion} time={time} setTime={handleTime} />
          <div className='w-full flex justify-center items-center flex-col gap-5'>
            {answers.map((answer, idx) => (
              <Answers
                correctAnswer={correctAnswer}
                key={idx}
                answer={answer}
                idx={idx}
                selectedAnswerIndex={selectedAnswerIndex}
                onAnswerSelected={onAnswerSelected}
              />
            ))}
          </div>
          <div className='quiz-number flex gap-5'>
            {quiz.questions.map((quiz) => (
              <StatusCircle quiz={quiz} correctId={correctId} wrongId={wrongId} />
            ))}
          </div>
        </div>
      ) : (
        <Result questionsLength={questions.length} result={result} />
      )}
    </div>
  );
};

export default Quiz;
