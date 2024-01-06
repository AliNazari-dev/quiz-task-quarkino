"use client";

import { useEffect } from "react";

type TimerProps = {
  onTimeout: () => void;
  setTime: (time: number) => void;
  time: number;
};

export default function TimerProgress({ onTimeout, time, setTime }: TimerProps) {
  useEffect(() => {
    if (time < 5) {
      const timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onTimeout();
      setTime(0);
    }
  }, [time]);

  const progress = (time / 100) * 100;

  return (
    <div className='w-[300px] bg-green-700 h-3 rounded-lg mb-8'>
      <div
        className='bg-red-600 h-3 rounded-lg transition-all'
        style={{ width: `${progress * 20}%` }}></div>
      <div className='text-center mt-2 font-bold'>lost time : {time} s</div>
    </div>
  );
}
