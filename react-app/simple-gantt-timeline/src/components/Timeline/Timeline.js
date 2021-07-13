// TODO: Anchor point for Timeline with dynamic position
// TODO: Get Dynamic Window width for TimeAxis (WINDOW_WIDTH)
// NOTE: Dynamic Constant
import { useState } from "react";

import Task from "../Task/Task";
import EmptyTask from "../EmptyTask/EmptyTask";
import TaskCreator from "../TaskCreator/TaskCreator";

import './Timeline.css';

import {
  EMPTY_TASK_MAX_SPREAD,
  DEPTH_LIMIT,
} from "../../constants/constants"

// Functions
// TODO: More resiliant day spread calculator for multiple timezone and change in day time
function getDaySpread(dateA, dateB) {
  return Math.floor((dateB.getTime() - dateA.getTime()) / 86400000);
};

function Timeline({mouseEvent, fromDate, topOrigin, leftOrigin, maxSpread, dayWidth, taskHeigh, store, editTask}) {
  editTask = editTask ?? ((_) => (undefined));


  // TODO: Both can be merged
  const [emptyTask, setEmptyTask] = useState({});
  const [editableTask, setEditableTask] = useState({});

  const dayOrigin = new Date(fromDate.getTime());
  const timelineMap = {};
  const tasks = [];

  store.forEach((item, _) => {
    placeTask(item, Task);
  });
  if (emptyTask.StartDate && emptyTask.DueDate) {
    placeTask(emptyTask, EmptyTask);
  };

  function placeTask(item, Template) {
    // Get offset and spread
    const dayOffset = getDaySpread(dayOrigin, item.StartDate);
    const spread = getDaySpread(item.StartDate, item.DueDate) + 1;

    let row = -1, column = dayOffset;
    if (item.row) {
      // Check for collision
      let isCollision = false;
      for (let i = 0; i < spread; i++) {
        if (timelineMap[`${column + i}:${item.row}`] === true) {
          isCollision = true;
          break;
        };
      };
      if (!isCollision) {
        row = item.row;
      };
    };

    // Not set yet
    if (row === -1) {
      // Find no collision
      let j = 0;
      let isCollision = false;
      do {
        isCollision = false;
        for (let i = 0; i < spread; i++) {
          if (timelineMap[`${column + i}:${j}`] === true) {
            isCollision = true;
            break;
          };
        };
        j += 1;
      } while (isCollision && j < DEPTH_LIMIT)
      row = j- 1;
    };

    // Populate map
    for (let i = 0; i < spread; i++) {
      timelineMap[`${column + i}:${row}`] = true;
    };

    // Add tasks
    if (column + spread - 1 >= 0 && column < maxSpread) {
      tasks.push(
        <Template
          key={`${column}-${row}`}
          name={item.Name}
          absoluteTop={topOrigin + taskHeigh * row}
          absoluteLeft={leftOrigin + dayWidth * column}
          width={dayWidth * spread}
          height={taskHeigh}
          paddingLeft={-Math.min(column, 0) * dayWidth}
          setName={(value) => (setEmptyTask({...emptyTask, Name:value}))}
          taskSelected={(_) => (taskSelected(item.Id))}
        />
      );
    };
  }

  function validateEmptyTask() {
    // Only validate if task exist
    if (!emptyTask.Name || !emptyTask.StartDate || !emptyTask.DueDate) {
      return;
    };

    const taskId = Date.now()
    editTask({...emptyTask, Id: taskId});
  }

  function createTask(column, row) {
    // Just remove if already there
    if (emptyTask.StartDate && emptyTask.DueDate) {
      validateEmptyTask()
      setEmptyTask({});
      return;
    };
    let i = 0
    for (i = 0; i < EMPTY_TASK_MAX_SPREAD; i++) {
      if (timelineMap[`${column + i}:${row}`] === true) {
        break
      };
    };
    // Impossible to spawn new task here
    if (i === 0) {
      return;
    };

    setEmptyTask({
      Name: "",
      StartDate: new Date(dayOrigin.getTime() + column * 86400000),
      DueDate: new Date(dayOrigin.getTime() + (column + i - 1) * 86400000),
      row: row,
    });
  }

  function taskSelected(id) {
    return;
  }

  function editTask(id, {StartDate, DueDate}) {
    return;
  }

  return (
    <div
      className="Timeline"
    >
      <TaskCreator
        absoluteTop={topOrigin}
        absoluteLeft={leftOrigin}
        width={dayWidth * maxSpread}
        dayWidth={dayWidth}
        taskHeigh={taskHeigh}
        createTask={createTask}
      />
      {tasks}
    </div>
  );
}

export default Timeline;
