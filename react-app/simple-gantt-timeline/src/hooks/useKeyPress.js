import { useState, useEffect, useCallback } from "react";

function useKeyPress(targetKey) {
  // State for keeping track of wether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  const memoizedDownHandler = useCallback(
    ({key}) => {
      if (key === targetKey) {
        setKeyPressed(true);
      };
    },
    [targetKey]
  );
  // If released key is out target key then set to false
  const memoizedUpHandler = useCallback(
    ({key}) => {
      if (key === targetKey) {
        setKeyPressed(false);
      };
    },
    [targetKey]
  );
  // Add event listener
  useEffect(() => {
    window.addEventListener("keydown", memoizedDownHandler);
    window.addEventListener("keyup", memoizedUpHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", memoizedDownHandler);
      window.removeEventListener("keyup", memoizedUpHandler);
    };
  }, [memoizedDownHandler, memoizedUpHandler]); // Empty array ensures that effects is only run on mount and unmount
  return keyPressed;
};

export default useKeyPress;
