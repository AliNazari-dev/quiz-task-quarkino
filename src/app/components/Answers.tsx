type AnswersProps = {
  idx: number;
  answer: string;
  selectedAnswerIndex: number | null;
  onAnswerSelected: (answer: string, idx: number) => void;
};

export default function Answers({
  answer,
  onAnswerSelected,
  selectedAnswerIndex,
  idx,
}: AnswersProps) {
  return (
    <li
      onClick={() => {
        onAnswerSelected(answer, idx);
      }}
      className={`bg-blue-200 w-1/2 p-4 flex justify-center font-semibold rounded-lg  cursor-pointer ${
        selectedAnswerIndex === idx ? "bg-yellow-200" : "hover:bg-blue-100"
      }`}>
      <span>{answer}</span>
    </li>
  );
}
