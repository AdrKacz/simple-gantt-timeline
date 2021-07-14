// TODO: Center text vertically
// TODO: CHange layout to add transparent padding

import TaskHandle from "../TaskHandle/TaskHandle";

import './Task.css';

function Task({name, absoluteTop, absoluteLeft, width, height, paddingLeft, taskKey, updateTask}) {
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  function updateTaskHandleSide(side, clientX) {
    updateTask(side, clientX)
  }

  return (
    <div
      className="Task"
      onClick={handleClick}
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
