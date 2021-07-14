import { useState, useEffect, useCallback } from "react";

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
  Object.keys(listenTargets).forEach((key, _) => {
    listenTargets[key] = false;
  });
};


function useMousePosition(targetKey) {
  eventTargets[targetKey] = eventTargets[targetKey] ?? new EventTarget();
  listenTargets[targetKey] = listenTargets[targetKey] ?? false;

  // console.table(listenTargets);

  const [offset, setOffset] = useState([undefined, undefined]);

  function setIsListening(isListening) {
    listenTargets[targetKey] = isListening;
  }

  const memoizedUpdatePositionHandler = useCallback(
    (e) => {
      if (listenTargets[targetKey]) {
        setOffset([e.detail.x, e.detail.y]);
      };
    },
    [targetKey],
  );

  useEffect(() => {
    // Attach global listener to window
    if (listeningCounter === 0) {
      window.addEventListener("mousemove", positionHandler);
      window.addEventListener("mouseup", mouseUpHandler);
    };
    // Send update to local listener if any
    eventTargets[targetKey].addEventListener("updateposition", memoizedUpdatePositionHandler);

    listeningCounter += 1; // How many component are listening to mouse position
    return () => {
      // Remove update to local listener if any
      eventTargets[targetKey].removeEventListener("updateposition", memoizedUpdatePositionHandler);

      listeningCounter -= 1; // How many component are listening to mouse position

      // Detach global listener to window
      if (listeningCounter === 0) {
        window.removeEventListener("mousemove", positionHandler);
        window.removeEventListener("mouseup", mouseUpHandler);
      };
    };
  }, [targetKey, memoizedUpdatePositionHandler]);

  return [listenTargets[targetKey] ? offset[0] : undefined, setIsListening];
}

export default useMousePosition;
