import { QuizType } from "../../../../types/types";

type StatusCircleType = {
  quiz: QuizType;
  correctId: number[];
  wrongId: number[];
};

const StatusCircle = ({ quiz, correctId, wrongId }: StatusCircleType) => {
  return (
    <span
      className={`p-3 rounded-full outline outline-blue-600 ${
        correctId.includes(quiz.id)
          ? "bg-green-500"
          : wrongId.includes(quiz.id)
          ? "bg-red-500"
          : "bg-white"
      }`}></span>
  );
};

export default StatusCircle;
