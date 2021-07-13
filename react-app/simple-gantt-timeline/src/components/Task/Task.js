// TODO: Center text vertically
// TODO: CHange layout to add transparent padding

import TaskHandle from "../TaskHandle/TaskHandle";

import './Task.css';

function Task({name, absoluteTop, absoluteLeft, width, height, paddingLeft, taskSelected}) {
  taskSelected = taskSelected ?? ((_) => (undefined));

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  function handleTaskSelected() {
    taskSelected();
  };

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
        width={10}
        height={height}
        handleSelected={handleTaskSelected}
      />
      <div
        className="text-container"
        style={{
          "padding-left": paddingLeft,
        }}
      >
      {name}
      </div>
      <TaskHandle
        width={10}
        height={height}
        handleSelected={handleTaskSelected}
      />
    </div>
  );
}

export default Task;
