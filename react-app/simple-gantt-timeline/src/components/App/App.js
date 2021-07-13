import { useState } from "react";

import Slider from "../Slider/Slider";
import TimeAxis from "../TimeAxis/TimeAxis";
import Timeline from "../Timeline/Timeline";

import useClickEvent from "../../hooks/useClickEvent"

import {
  DAY_WIDTH,
  TASK_HEIGHT,
} from "../../constants/constants"

import MockDatabase from "../../store/mock-database.js";

import './App.css';

function App() {
  const [clickPressed, isListening, setIsListening] = useClickEvent(false);
  
  // localStore to be remove if use real endpoint
  const [localStore, setLocalStore] = useState({...MockDatabase})

  const [fromDate, setFromDate] = useState(new Date(Date.now() - 7 * 86400000))

  const topOrigin = 2 * TASK_HEIGHT;
  const leftOrigin = 0;
  // Get max number of slot in window
  const windowWidth = window.innerWidth;
  const maxSpread = Math.floor(windowWidth / DAY_WIDTH);

  function editTask(task) {
    // Do nothing if task not vali
    if (!task.Id || !task.Name || !task.StartDate || !task.DueDate) {
      return;
    };

    setLocalStore({
      ...localStore,
      [task.Id]: {...task},
    });
  }

  return (
    <div className="App">
      <Slider
      previous={(_) => (setFromDate(new Date(fromDate.getTime() - 86400000)))}
      next={(_) => (setFromDate(new Date(fromDate.getTime() + 86400000)))}
      />
      <TimeAxis
        topOrigin={topOrigin}
        leftOrigin={leftOrigin}
        maxSpread={maxSpread}
        dayWidth={DAY_WIDTH}
        dayOrigin={fromDate}
        height={TASK_HEIGHT}
      />
      <Timeline
        fromDate={fromDate}
        topOrigin={topOrigin + 2 * TASK_HEIGHT}
        leftOrigin={leftOrigin}
        maxSpread={maxSpread}
        dayWidth={DAY_WIDTH}
        taskHeigh={TASK_HEIGHT}
        store={Object.values(localStore)}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
