import { useState, useEffect } from "react";

function useKeyPress(targetKey) {
  // State for keeping track of wether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler({key}) {
    if (key === targetKey) {
      setKeyPressed(true);
    };
  };
  // If released key is out target key then set to false
  function upHandler({key}) {
    if (key === targetKey) {
      setKeyPressed(false);
    };
  };
  // Add event listener
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keydown", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keydown", upHandler);
    };
  }, []); // Empty array ensures that effects is only run on mount and unmount
  return keyPressed;
};

export default useKeyPress;
