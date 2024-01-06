import Link from "next/link";
import React from "react";
type ResultType = {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
};

type ResultPageProps = {
  questionsLength: number;
  result: ResultType;
};

const Result = ({ questionsLength, result }: ResultPageProps) => {
  const resultScore = (result.score / 25) * 100;

  return (
    <div
      className={`flex flex-col w-1/3 justify-between p-5 rounded-lg ${
        resultScore >= 50 ? "bg-green-200" : "bg-red-200"
      } h-[50vh]`}>
      <h1 className='font-bold flex self-center text-xl'>Results</h1>
      <h3
        className={`${
          resultScore >= 50 ? "text-green-700" : "text-red-700"
        } text-4xl font-bold text-center`}>
        Overall {resultScore}%
      </h3>
      <div className='flex flex-col gap-2 w-full justify-between'>
        <p>
          Total Questions: <span>{questionsLength}</span>
        </p>
        <p>
          Correct Answers: <span className='text-md font-bold'>{result.correctAnswers}</span>
        </p>
        <p>
          Wrong Answers: <span className='text-md font-bold'>{result.wrongAnswers}</span>
        </p>
      </div>
      <div className='flex w-100 gap-2'>
        <button
          className='bg-blue-500 p-3 text-white font-bold rounded-md w-full'
          onClick={() => window.location.reload()}>
          Restart
        </button>
        <Link
          href={"/"}
          className='bg-blue-500 p-3 text-white font-bold rounded-md w-full text-center'>
          <button onClick={() => window.location.reload()}>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
