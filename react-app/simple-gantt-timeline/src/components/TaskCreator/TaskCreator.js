import { useEffect } from "react";

import './TaskCreator.css';

import useKeyPress from "../../hooks/useKeyPress";

function TaskCreator({absoluteTop, absoluteLeft, width, height, dayWidth, taskHeigh, createTask}) {
  const enterPressed = useKeyPress("Enter")

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;

    const column = Math.floor(offsetX / dayWidth);
    const row = Math.floor(offsetY / taskHeigh);

    createTask(column, row)
  }

  useEffect(() => {
    if (enterPressed) {
      createTask()
    }
  }, [enterPressed, createTask])

  return (
    <div
    className="TaskCreator"
    onClick={handleClick}
    tabIndex={0}
    style={{
      top: absoluteTop,
      left: absoluteLeft,
      width: width,
      height: height,
    }}
    >
    </div>
  );
}

export default TaskCreator;
