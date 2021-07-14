import { useState, useEffect } from "react";

let listeningCounter = 0;
const eventTargets = {};
const listenTargets = {};

function positionHandler({offsetX, offsetY}) {
  const updatePositionEvent = new CustomEvent("updateposition", {detail: {offsetX: offsetX, offsetY: offsetY}})
  Object.values(eventTargets).forEach((item, _) => {
    item.dispatchEvent(updatePositionEvent);
  });
};

function mouseUpHandler({}) {
  Object.keys(listenTargets).forEach((key, _) => {
    listenTargets[key] = false;
  });
};


function useMousePosition(targetKey) {
  eventTargets[targetKey] = eventTargets[targetKey] ?? new EventTarget();
  listenTargets[targetKey] = listenTargets[targetKey] ?? false;

  // console.table(listenTargets);

  const [offsetX, setOffsetX] = useState();
  const [offsetY, setOffsetY] = useState();

  function setIsListening(isListening) {
    listenTargets[targetKey] = isListening;
  }

  function updatePositionHandler(e) {
    if (listenTargets[targetKey]) {
      setOffsetX(e.detail.offsetX);
      setOffsetY(e.detail.offsetY);
    };
  };


  useEffect(() => {
    // Attach global listener to window
    if (listeningCounter === 0) {
      window.addEventListener("mousemove", positionHandler);
      window.addEventListener("mouseup", mouseUpHandler);
    };
    // Send update to local listener if any
    eventTargets[targetKey].addEventListener("updateposition", updatePositionHandler);

    listeningCounter += 1; // How many component are listening to mouse position
    return () => {
      // Remove update to local listener if any
      eventTargets[targetKey].removeEventListener("updateposition", updatePositionHandler);

      listeningCounter -= 1; // How many component are listening to mouse position

      // Detach global listener to window
      if (listeningCounter === 0) {
        window.removeEventListener("mousemove", positionHandler);
        window.removeEventListener("mouseup", mouseUpHandler);
      };
    };
  }, []);

  return [offsetX, offsetY, setIsListening];
}

export default useMousePosition;
