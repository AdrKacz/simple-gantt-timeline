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
} from "../../constants/constants"

// Functions
import getDaySpread from "../../helpers/getDaySpread";

function Timeline({mouseEvent, fromDate, topOrigin, leftOrigin, maxSpread, dayWidth, taskHeigh, store, editStoreTask}) {
  editStoreTask = editStoreTask ?? ((_) => (undefined));

  function handleMouseUp() {
    validateEditedTask();
    setEditedTask({});
  };

  // TODO: Both can be merged
  const [emptyTask, setEmptyTask] = useState({});
  const [editedTask, setEditedTask] = useState({});

  const dayOrigin = new Date(fromDate.getTime());
  const timelineMap = {};
  const localStoreMapInfo = {}
  const tasks = [];

  store.forEach((item, _) => {
    if (editedTask.Id === item.Id) {
      placeTask(editedTask, Task);
    } else {
      placeTask(item, Task);
    };
  });
  if (emptyTask.StartDate && emptyTask.DueDate) {
    placeTask(emptyTask, EmptyTask);
  };

  function placeTask(item, Template) {
    // Get offset and spread
    const dayOffset = getDaySpread(dayOrigin, item.StartDate);
    const spread = getDaySpread(item.StartDate, item.DueDate) + 1;

    let row = item.row, column = dayOffset;

    // Populate map
    for (let i = 0; i < spread; i++) {
      timelineMap[`${column + i}:${row}`] = item.Id;
    };
    localStoreMapInfo[item.Id] = {
      column: column,
      row: row,
      spread: spread,
    };
    // Add tasks
    if (column + spread - 1 >= 0 && column < maxSpread) {

      tasks.push(
        <Template
          taskKey={`Task-${item.Id}`}
          key={`${column}-${row}`}
          name={item.Name}
          absoluteTop={topOrigin + taskHeigh * row}
          absoluteLeft={leftOrigin + dayWidth * column}
          width={dayWidth * spread}
          height={taskHeigh}
          paddingLeft={-Math.min(column, 0) * dayWidth}
          setName={(value) => (setEmptyTask({...emptyTask, Name:value}))}
          updateTask={(side, clientX) => (updateLocalTask(item.Id, side, clientX))}
        />
      );
    };
  }

  function validateEditedTask() {
    // Only validate if task exist
    if (!editedTask.Id || !editedTask.Name || !editedTask.StartDate || !editedTask.DueDate) {
      return;
    };

    editStoreTask({...editedTask});
  }

  function validateEmptyTask() {
    // Only validate if task exist
    if (!emptyTask.Name || !emptyTask.StartDate || !emptyTask.DueDate) {
      return;
    };

    const taskId = Date.now()
    editStoreTask({...emptyTask, Id: taskId});
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
      if (timelineMap[`${column + i}:${row}`]) {
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

  function updateLocalTask(taskId, side, clientX) {
    if (!taskId || !side || !clientX) {
      return;
    }
    // console.log("... Try to edit Local Task", taskId, side, clientX)
    let localTask;
    if (editedTask.Id === taskId) {
      localTask = {...editedTask};
    } else {
      for (let i = 0; i < store.length; i++) {
        if (store[i].Id === taskId) {
          localTask = {...store[i]}
          break;
        };
      };
    };
    const fromColumn = localStoreMapInfo[taskId].column;
    const toColumn = localStoreMapInfo[taskId].column + localStoreMapInfo[taskId].spread - 1;
    const localRow = localStoreMapInfo[taskId].row;
    // console.log("... With", localTask.Id, fromColumn, toColumn, localRow)
    const localColumn = Math.floor((clientX - leftOrigin) / dayWidth);
    // console.log("...With", localColumn, fromColumn, toColumn)

    if (side === "left") {
      if (localColumn > toColumn) {
        return;
      }
      for (let i = Math.min(localColumn, fromColumn); i <= Math.max(localColumn, fromColumn); i++) {
        if (timelineMap[`${i}:${localRow}`] && timelineMap[`${i}:${localRow}`] !== taskId) {
          return;
        };
      };
      setEditedTask({
        ...localTask,
        StartDate: new Date(localTask.StartDate.getTime() + (localColumn - fromColumn) * 86400000),
      });

    } else if (side === "right") {
      if (localColumn < fromColumn) {
        return;
      }
      for (let i = Math.min(localColumn, toColumn); i <= Math.max(localColumn, toColumn); i++) {
        if (timelineMap[`${i}:${localRow}`] && timelineMap[`${i}:${localRow}`] !== taskId) {
          return;
        };
      };
      setEditedTask({
        ...localTask,
        DueDate: new Date(localTask.DueDate.getTime() + (localColumn - toColumn) * 86400000),
      });
    };

    return;
  };

  return (
    <div
      onMouseUp={handleMouseUp}
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
