import { useState, useEffect } from "react";

function useClickEvent(listen, gapX, gapY) {
  gapX = gapX ?? 100;
  gapY = gapY ?? 100;
  // State for keeping track of wether key is pressed
  const [mousePosition, setMousePosition] = useState({x: 1000, y: 0});
  const [clickPressed, setClickPressed] = useState(false);
  const [isListening, setIsListening] = useState(listen);

  function positionHandler({offsetX, offsetY}) {
    if (Math.abs(mousePosition.x - offsetX) > gapX || Math.abs(mousePosition.y - offsetY) > gapY) {
      // console.log("Old Position", mousePosition, "Update Position", {x: offsetX, y: offsetY});
      setMousePosition({x: offsetX, y: offsetY});
    }
  }

  // If pressed key is our target key then set to true
  function downHandler({key}) {
    console.log("Click Down")
    setClickPressed(true);
  };
  // If released key is out target key then set to false
  function upHandler({key}) {
    console.log("Click Up")
    setClickPressed(false);
  };
  // Add event listener
  useEffect(() => {
      console.log("CREATION")
      window.addEventListener("mousemove", positionHandler);
      window.addEventListener("mousedown", downHandler);
      window.addEventListener("mouseup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.addEventListener("mousemove", positionHandler);
      window.removeEventListener("mousedown", downHandler);
      window.removeEventListener("mouseup", upHandler);
    };
  }, []); // Empty array ensures that effects is only run on mount and unmount
  return [{clickPressed: clickPressed, xOffset: mousePosition?.x, yOffset: mousePosition?.y}, isListening, setIsListening];
};

export default useClickEvent;
