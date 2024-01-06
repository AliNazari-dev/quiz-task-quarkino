// TimerProgress.test.tsx
import React from "react";
import { render, act, fireEvent, waitFor } from "@testing-library/react";
import TimerProgress from "../src/app/components/timerProgress/TimerProgress";

jest.useFakeTimers();

describe("TimerProgress", () => {
  const wrapperClassName = "timer-progress";
  // it("increments time and calls onTimeout when time reaches 5 seconds", async () => {
  //   const onTimeoutMock = jest.fn();
  //   const setTimeMock = jest.fn();

  //   const { getByText } = render(
  //     <TimerProgress onTimeout={onTimeoutMock} time={5} setTime={setTimeMock} />
  //   );

  //   // Ensure the initial UI is rendered correctly
  //   expect(getByText("lost time : 0 s")).toBeInTheDocument();

  //   // Advance time by 1 second
  //   act(() => {
  //     jest.advanceTimersByTime(1000);
  //   });

  //   // Ensure the time has been incremented
  //   expect(getByText("lost time : 1 s")).toBeInTheDocument();

  //   // Advance time by 4 more seconds
  //   act(() => {
  //     jest.advanceTimersByTime(4000);
  //   });

  //   // Ensure the time has been incremented to 5 seconds
  //   expect(getByText("lost time : 5 s")).toBeInTheDocument();

  //   // Ensure onTimeout is called
  //   await waitFor(() => {
  //     expect(onTimeoutMock).toHaveBeenCalledTimes(1);
  //   });

  //   // Ensure setTime is called with 0 after onTimeout
  //   await waitFor(() => {
  //     expect(setTimeMock).toHaveBeenCalledWith(0);
  //   });
  // });

  // it("clears interval on unmount", () => {
  //   const onTimeoutMock = jest.fn();
  //   const setTimeMock = jest.fn();

  //   const { unmount } = render(
  //     <TimerProgress onTimeout={onTimeoutMock} time={0} setTime={setTimeMock} />
  //   );

  //   // Unmount the component
  //   unmount();

  //   // Ensure clearInterval is called
  //   expect(clearInterval).toHaveBeenCalled();
  // });
  it("render correctly wrapper", () => {
    const onTimeoutMock = jest.fn();
    const setTimeMock = jest.fn();

    const { container } = render(
      <TimerProgress onTimeout={onTimeoutMock} time={2} setTime={setTimeMock} />
    );

    expect(container.firstChild).toHaveClass(wrapperClassName);
  });

  it("match snapshot", () => {
    const onTimeoutMock = jest.fn();
    const setTimeMock = jest.fn();

    const { container } = render(
      <TimerProgress onTimeout={onTimeoutMock} time={2} setTime={setTimeMock} />
    );

    expect(container).toMatchSnapshot();
  });
});
