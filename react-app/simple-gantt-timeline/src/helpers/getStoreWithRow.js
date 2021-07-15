import getDaySpread from "./getDaySpread";

import {
  DEPTH_LIMIT,
} from "../constants/constants"

function getStoreWithRow(store) {
  const storeWithRow = {};

  const storeMap = {};

  Object.values(store).forEach((item, i) => {
    // Get offset and spread
    const dayOffset = getDaySpread(new Date(), item.StartDate);
    const spread = getDaySpread(item.StartDate, item.DueDate) + 1;

    let row = -1, column = dayOffset;
    if (item.row) {
      // Check for collision
      let isCollision = false;
      for (let i = 0; i < spread; i++) {
        if (storeMap[`${column + i}:${item.row}`]) {
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
          if (storeMap[`${column + i}:${j}`]) {
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
      storeMap[`${column + i}:${row}`] = item.Id;
    };

    // Populate store with row
    storeWithRow[item.Id] = {
      ...item,
      row: row,
    };
  });

  return storeWithRow;
};

export default getStoreWithRow;