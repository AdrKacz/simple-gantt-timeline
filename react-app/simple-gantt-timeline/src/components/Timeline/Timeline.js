// TODO: Anchor point for Timeline with dynamic position
// TODO: Get Dynamic Window width for TimeAxis (WINDOW_WIDTH)
// NOTE: Dynamic Constant
import { useState } from "react";

import Xarrow from "react-xarrows";

import Task from "../Task/Task";
import EmptyTask from "../EmptyTask/EmptyTask";
import TaskCreator from "../TaskCreator/TaskCreator";
import EditTaskPanel from "../EditTaskPanel/EditTaskPanel";
import DragDependencyBox from "../DragDependencyBox/DragDependencyBox";

import useMousePosition from "../../hooks/useMousePosition";

import './Timeline.css';

import {
  EMPTY_TASK_MAX_SPREAD,
} from "../../constants/constants"

// Functions
import getDaySpread from "../../helpers/getDaySpread";

function Timeline({mouseEvent, fromDate, topOrigin, leftOrigin, maxSpread, dayWidth, taskHeigh, store, editStoreTask}) {
  editStoreTask = editStoreTask ?? ((_) => (undefined));

  function handleMouseUp() {
    if (!isEditTaskPanelOpen && editedTask.Id) {
      validateRunningTasks();
    };
  };

  // TODO: Both can be merged
  const [emptyTask, setEmptyTask] = useState({});
  const [editedTask, setEditedTask] = useState({});

  const [isEditTaskPanelOpen, setIsEditTaskPanelOpen] = useState(false);

  const [dragX, dragY, isDrag, setIsDrag] = useMousePosition(`dragdependency`);
  const [dependencyCouple, setDependencyCouple] = useState({from:undefined, to:undefined});

  const dayOrigin = new Date(fromDate.getTime());
  const timelineMap = {};
  const localStoreMapInfo = {}
  const tasks = [];
  const dependencies = [];

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

  function handleIsDragBy(taskId, origin) {
    if (origin !== "from" && origin !== "to") { // only handle endpoints origin
      return;
    };

    setDependencyCouple({
      ...dependencyCouple,
      [origin]: taskId
    });
    setIsDrag(true)
  };

  function handleAskForDependencyIfDrag(taskdId) {
    let fromTask;
    let toTaskId;
    if (dependencyCouple.from) { // receive to
      fromTask = findTask(dependencyCouple.from);
      toTaskId = taskdId;
    } else if (dependencyCouple.to) { // receive from
      fromTask = findTask(taskdId);
      toTaskId = dependencyCouple.to;
    }

    if (fromTask && toTaskId && fromTask.Id !== toTaskId) {
      editStoreTask({
        ...fromTask,
        linkedTo: (fromTask.linkedTo ?? new Set()).add(toTaskId)
      });
    }
    setDependencyCouple({from: undefined, to: undefined});
  }

  function findTask(taskId) {
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
    return localTask;
  }

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
          updateTask={(...args) => (updateLocalTask(item.Id, ...args))}
          launchEditTaskObject={() => (launchEditLocalTaskObject(item.Id))}
          setIsDrag={(origin) => (handleIsDragBy(item.Id, origin))}
          askForDependencyIfDrag={() => (handleAskForDependencyIfDrag(item.Id))}
        />
      );

      // Add dependencies if any
      if (item.linkedTo && item.Id !== editedTask.Id)  {
        placeDependencies(item.Id, item.linkedTo)
      }
    };
  }

  function placeDependencies(fromId, toIds) {
    toIds.forEach((toId, _) => {
      if (toId !== editedTask.Id) {
        dependencies.push(
          <Xarrow
            start={`Task-${fromId}`}
            end={`Task-${toId}`}
            curveness={0.5}
            strokeWidth={3}
          />
        )
      }
    })
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

    const taskId = Date.now().toString();
    editStoreTask({...emptyTask, Id: taskId});
  }

  function validateRunningTasks() {
    // Validate empty and edited task
    if (emptyTask.StartDate && emptyTask.DueDate) {
      validateEmptyTask();
      setEmptyTask({});
      return true;
    } else if (editedTask.Id) {
      if (isEditTaskPanelOpen) {
        setIsEditTaskPanelOpen(false);
      };
      validateEditedTask();
      setEditedTask({});
      return true;
    };
    return false;
  }

  function createTask(column, row) {
    // Just remove if already there
    if (validateRunningTasks()) {
      return;
    };

    if (!column || !row) {
      return;
    }
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

  function launchEditLocalTaskObject(taskId) {
    // Verification if creation / edition running (should not happen)
    if (validateRunningTasks()) {
      return;
    };

    // Open Edition panel
    const localTask = findTask(taskId);
    setIsEditTaskPanelOpen(true);
    setEditedTask(localTask);
  }

  function editCurrentLocalTaskObject(newTaskObject) {
    setEditedTask(newTaskObject);
  }

  function updateLocalTask(taskId, side, clientX, clientY) {
    if (!taskId || !side || (!clientX && !clientY)) {
      return;
    }
    const localTask = findTask(taskId);
    const fromColumn = localStoreMapInfo[taskId].column;
    const toColumn = localStoreMapInfo[taskId].column + localStoreMapInfo[taskId].spread - 1;
    const currentRow = localStoreMapInfo[taskId].row;

    if (side === "left") {
      const localColumn = Math.floor((clientX - leftOrigin - dayWidth / 2) / dayWidth);
      if (localColumn > toColumn || localColumn - fromColumn === 0) {
        return;
      }
      for (let i = Math.min(localColumn, fromColumn); i <= Math.max(localColumn, fromColumn); i++) {
        if (timelineMap[`${i}:${currentRow}`] && timelineMap[`${i}:${currentRow}`] !== taskId) {
          return;
        };
      };
      setEditedTask({
        ...localTask,
        StartDate: new Date(localTask.StartDate.getTime() + (localColumn - fromColumn) * 86400000),
      });

    } else if (side === "right") {
      const localColumn = Math.floor((clientX - leftOrigin - dayWidth / 2) / dayWidth);
      if (localColumn < fromColumn || localColumn - toColumn === 0) {
        return;
      }
      for (let i = Math.min(localColumn, toColumn); i <= Math.max(localColumn, toColumn); i++) {
        if (timelineMap[`${i}:${currentRow}`] && timelineMap[`${i}:${currentRow}`] !== taskId) {
          return;
        };
      };
      setEditedTask({
        ...localTask,
        DueDate: new Date(localTask.DueDate.getTime() + (localColumn - toColumn) * 86400000),
      });

    } else if (side === "all") {
      const localColumn = Math.floor((clientX - leftOrigin) / dayWidth);
      const localRow = Math.floor((clientY - topOrigin) / taskHeigh);
      const columnShift = Math.floor(localColumn - (toColumn + fromColumn) / 2);  // Grab alway is the middle for now
      if (localRow < 0 || (columnShift + (localRow - currentRow)  === 0)) {
        return;
      };

      for (let i = fromColumn + columnShift; i <= toColumn + columnShift; i++) {
        if (timelineMap[`${i}:${localRow}`] && timelineMap[`${i}:${localRow}`] !== taskId) {
          return;
        };
      };
      setEditedTask({
        ...localTask,
        StartDate: new Date(localTask.StartDate.getTime() + columnShift * 86400000),
        DueDate: new Date(localTask.DueDate.getTime() + columnShift * 86400000),
        row: localRow,
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
      {dependencies}
      <EditTaskPanel
          taskObject={isEditTaskPanelOpen ? editedTask : {}}
          editTaskObject={editCurrentLocalTaskObject}
      />
      {isDrag && (
        <DragDependencyBox
          positionX={dragX}
          positionY={dragY}
        />
      )}
    </div>
  );
}

export default Timeline;
