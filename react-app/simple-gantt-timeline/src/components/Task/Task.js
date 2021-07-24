// TODO: Center text vertically
// TODO: Change layout to add transparent padding

import { useState, useEffect } from "react";

import TaskHandle from "../TaskHandle/TaskHandle";
import DragDependency from "../DragDependency/DragDependency";
import DragDependencyBox from "../DragDependencyBox/DragDependencyBox";

import useMousePosition from "../../hooks/useMousePosition";

import './Task.css';

function Task({name, absoluteTop, absoluteLeft, width, height, paddingLeft, taskKey, updateTask, launchEditTaskObject}) {
  const [clientX, clientY, isListening, setIsListening] = useMousePosition(taskKey);

  const [dragX, dragY, isDrag, setIsDrag] = useMousePosition(`${taskKey}:drag`);
  const [displayDragDependencies, setDisplayDragDependencies] = useState(false);

  function handleMouseDown(e) {
    setDisplayDragDependencies(false);
    setIsListening(true);
  };

  function handleMouseDownDragDependency(e) {
    setIsDrag(true);
  };

  function handleMouseEnter(e) {
    if (isListening) {
      return;
    };
    setDisplayDragDependencies(true);
  };

  function handleMouseLeave(e) {
    if (isListening) {
      return;
    };
    setDisplayDragDependencies(false);
  };

  function updateTaskHandleSide(side, clientX) {
    updateTask(side, clientX, 0);
  };

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    launchEditTaskObject();
  }

  useEffect(() => {
    updateTask("all", clientX, clientY);
  }, [clientX, clientY, updateTask])

  return (
    <>
    <div
      className="Task"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        top: absoluteTop,
        left: absoluteLeft,
        width: width,
        height: height,
      }}
    >
      <TaskHandle
        isLeft
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
      {displayDragDependencies && (
        <>
          <DragDependency
            originAnchor
            width={width}
            height={height}
            handleMouseDown={handleMouseDownDragDependency}
          />
          <DragDependency
            width={width}
            height={height}
            handleMouseDown={handleMouseDownDragDependency}
          />
        </>
      )}
      <TaskHandle
        handleKey={`${taskKey}:right`}
        width={10}
        height={height}
        updateTaskHandle={(clientX) => (updateTaskHandleSide("right", clientX))}
      />
    </div>
    {isDrag && (
      <DragDependencyBox
        positionX={dragX}
        positionY={dragY}
      />
    )}
    </>
  );
}

export default Task;
