// TODO: Center text vertically
// TODO: Change layout to add transparent padding

import { useState, useEffect } from "react";

import TaskHandle from "../TaskHandle/TaskHandle";
import DragDependency from "../DragDependency/DragDependency";

import useMousePosition from "../../hooks/useMousePosition";

import './Task.css';

function Task({name, absoluteTop, absoluteLeft, width, height, paddingLeft, taskKey, updateTask, launchEditTaskObject, setIsDrag, askForDependencyIfDrag}) {
  const [clientX, clientY, isListening, setIsListening] = useMousePosition(taskKey);

  const [displayDragDependencies, setDisplayDragDependencies] = useState(false);

  function handleMouseDown(e) {
    setDisplayDragDependencies(false);
    setIsListening(true);
  };

  function handleMouseDownDragDependencyFrom(e) {
    setIsDrag("from");
  };

  function handleMouseDownDragDependencyTo(e) {
    setIsDrag("to");
  };

  function handleMouseEnter(e) {
    console.log("Mouse Enter", name, "Is Listening?", isListening)
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

  function handleMouseUp(e) {
    askForDependencyIfDrag()
  }

  function updateTaskHandleSide(side, clientX) {
    updateTask(side, clientX, 0);
  };

  function handleClick(e) {
    // e.preventDefault();
    // e.stopPropagation();

    launchEditTaskObject();
  }

  useEffect(() => {
    updateTask("all", clientX, clientY);
  }, [clientX, clientY, updateTask])

  return (
    <div
      className="Task"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
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
            handleMouseDown={handleMouseDownDragDependencyFrom}
          />
          <DragDependency
            width={width}
            height={height}
            handleMouseDown={handleMouseDownDragDependencyTo}
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
  );
}

export default Task;
