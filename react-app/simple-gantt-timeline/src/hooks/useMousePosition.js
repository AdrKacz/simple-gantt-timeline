// TODO: Optmise handler to not update at every frame

import { useState, useEffect, useCallback } from "react";

// import {
//   MINIMUM_SQUARED_DETECTION_RADIUS
// } from "../constants/constants"

let listeningCounter = 0;
const eventTargets = {};
const listenTargets = {};

function positionHandler({clientX, clientY}) {
  const updatePositionEvent = new CustomEvent("updateposition", {detail: {x: clientX, y: clientY}})
  Object.values(eventTargets).forEach((item, _) => {
    item.dispatchEvent(updatePositionEvent);
  });
};

function mouseUpHandler() {
  const localMouseUpEvent = new Event("localmouseup")
  Object.keys(listenTargets).forEach((key, _) => {
    listenTargets[key] = false;
  });
  Object.values(eventTargets).forEach((item, _) => {
    item.dispatchEvent(localMouseUpEvent);
  });
};

// function squaredDistance(pointA, pointB) {
//   return ((pointA[0] - pointB[0]) ** 2 + (pointA[1] - pointB[1]) ** 2)
// }

function useMousePosition(targetKey) {
  eventTargets[targetKey] = eventTargets[targetKey] ?? new EventTarget();
  listenTargets[targetKey] = listenTargets[targetKey] ?? false;

  // console.table(listenTargets);

  const [offset, setOffset] = useState([0, 0]);

  function setIsListening(isListening) {
    listenTargets[targetKey] = isListening;
  }

  const memoizedUpdatePositionHandler = useCallback(
    (e) => {
      const touchPoint = [e.detail.x, e.detail.y]
      if (listenTargets[targetKey]) {
        setOffset(touchPoint);
      };
    },
    [targetKey],
  );

  const memoizedMouseUpHandler = useCallback(
    (e) => {
      setOffset([undefined, undefined]);
    },
    [],
  );

  useEffect(() => {
    // Attach global listener to window
    if (listeningCounter === 0) {
      window.addEventListener("mousemove", positionHandler);
      window.addEventListener("mouseup", mouseUpHandler);
    };
    // Send update to local listener if any
    eventTargets[targetKey].addEventListener("updateposition", memoizedUpdatePositionHandler);
    eventTargets[targetKey].addEventListener("localmouseup", memoizedMouseUpHandler);

    listeningCounter += 1; // How many component are listening to mouse position
    return () => {
      // Remove update to local listener if any
      eventTargets[targetKey].removeEventListener("updateposition", memoizedUpdatePositionHandler);
      eventTargets[targetKey].removeEventListener("localmouseup", memoizedMouseUpHandler);

      listeningCounter -= 1; // How many component are listening to mouse position

      // Detach global listener to window
      if (listeningCounter === 0) {
        window.removeEventListener("mousemove", positionHandler);
        window.removeEventListener("mouseup", mouseUpHandler);
      };
    };
  }, [targetKey, memoizedUpdatePositionHandler, memoizedMouseUpHandler]);

  if (targetKey==="task1:drag") {
    console.log(listenTargets[targetKey],  offset[0],  offset[1] )
  }
  return [
    listenTargets[targetKey] ? offset[0] : undefined,
    listenTargets[targetKey] ? offset[1] : undefined,
    listenTargets[targetKey],
    setIsListening,
  ];
}

export default useMousePosition;
