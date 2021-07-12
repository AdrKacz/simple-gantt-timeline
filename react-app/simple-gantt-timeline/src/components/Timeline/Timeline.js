// TODO: Anchor point for Timeline with dynamic position
// TODO: Get Dynamic Window width for TimeAxis (WINDOW_WIDTH)
// NOTE: Dynamic Constant

import Task from "../Task/Task";
import TimeAxis from "../TimeAxis/TimeAxis";

import './Timeline.css';

// Constant in pixel
const DAY_WIDTH = 80;
const TASK_HEIGHT = 50;

const TOP_ORIGIN = 2 * TASK_HEIGHT;
const LEFT_ORIGIN = 0;

const DEPTH_LIMIT = 100;

// Get max number of slot in window
const WINDOW_WIDTH = window.innerWidth;
const MAX_SPREAD = Math.floor(WINDOW_WIDTH / DAY_WIDTH);

// Functions
// TODO: More resiliant day spread calculator for multiple timezone and change in day time
function getDaySpread(dateA, dateB) {
  return Math.floor((dateB.getTime() - dateA.getTime()) / 86400000);
}

function Timeline({store}) {
  const dayOrigin = new Date(Date.now() - 7 * 86400000);

  const timelineMap = {};
  const tasks = [];

  store.forEach((item, _) => {
    // Get offset and spread
    const dayOffset = getDaySpread(dayOrigin, item.StartDate);
    const spread = getDaySpread(item.StartDate, item.DueDate) + 1;

    // Check for collision
    let j = 0;
    let isCollision = false;
    do {
      isCollision = false;
      for (let i = 0; i < spread; i++) {
        if (timelineMap[`${dayOffset + i}:${j}`] === true) {
          isCollision = true;
          break;
        };
      };
      j += 1;
    } while (isCollision && j < DEPTH_LIMIT)
    j -= 1;

    // Populate map
    for (let i = 0; i < spread; i++) {
      timelineMap[`${dayOffset + i}:${j}`] = true;
    };

    // Add tasks
    if (dayOffset + spread - 1 >= 0 && dayOffset < MAX_SPREAD) {
      tasks.push(
        <Task
          key={`${dayOffset}-${j}`}
          name={item.Name}
          absoluteTop={TOP_ORIGIN + TASK_HEIGHT * j}
          absoluteLeft={LEFT_ORIGIN + DAY_WIDTH * dayOffset}
          width={DAY_WIDTH * spread}
          height={TASK_HEIGHT}
          paddingLeft={-Math.min(dayOffset, 0) * DAY_WIDTH}
        />
      );
    };
  });

  return (
    <div
    className="Timeline">
      <TimeAxis
        topOrigin={TOP_ORIGIN - 2 * TASK_HEIGHT}
        leftOrigin={LEFT_ORIGIN}
        maxSpread={MAX_SPREAD}
        dayWidth={DAY_WIDTH}
        dayOrigin={dayOrigin}
        height={TASK_HEIGHT}
      />
      {tasks}
    </div>
  );
}

export default Timeline;
