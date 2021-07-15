// TODO: Center text vertically
// TODO: Change layout to add transparent padding

import { useEffect } from "react";

import TaskHandle from "../TaskHandle/TaskHandle";

import useMousePosition from "../../hooks/useMousePosition";

import './Task.css';

function Task({name, absoluteTop, absoluteLeft, width, height, paddingLeft, taskKey, updateTask}) {
  const [clientX, clientY, setIsListening] = useMousePosition(taskKey);

  function handleMouseDown(e) {
    setIsListening(true);
  };

  function updateTaskHandleSide(side, clientX) {
    updateTask(side, clientX, 0);
  };

  useEffect(() => {
    updateTask("all", clientX, clientY);
  }, [clientX, clientY, updateTask])

  return (
    <div
      className="Task"
      style={{
        top: absoluteTop,
        left: absoluteLeft,
        width: width,
        height: height,
      }}
    >
      <TaskHandle
        handleKey={`${taskKey}:left`}
        width={10}
        height={height}
        updateTaskHandle={(clientX) => (updateTaskHandleSide("left", clientX))}
      />
      <div
        className="text-container"
        onMouseDown={handleMouseDown}
        style={{
          "padding-left": paddingLeft, // NOTE: Trigger an error for no reason
        }}
      >
      {name}
      </div>
      <TaskHandle
        handleKey={`${taskKey}:right`}
        width={10}
        height={height}
        updateTaskHandle={(clientX) => (updateTaskHandleSide("right", clientX))}
      />
    </div>
  );
}

export default Task;
