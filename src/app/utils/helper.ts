export const getBGColor = (
  userAnswer: string | undefined,
  correctAnswer: string,
  answer: string
): string => {
  const isAnswerCorrect = userAnswer ? userAnswer === correctAnswer : undefined;

  if (
    (isAnswerCorrect === true && answer === userAnswer) ||
    (isAnswerCorrect === false && answer === correctAnswer)
  )
    return "bg-[#55AC78] text-white";

  if (isAnswerCorrect === false && answer === userAnswer) return "bg-[#AC5050] text-white";

  return "bg-white text-[#9F50AC]";
};

export const correctAnswerBg = (correctAnswer: string, userAnswer: string) => {
  const bgAnswer = correctAnswer === userAnswer ? true : false;
  return bgAnswer;
};
