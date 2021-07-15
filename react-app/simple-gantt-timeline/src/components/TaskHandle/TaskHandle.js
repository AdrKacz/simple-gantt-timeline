import { useEffect } from "react";

import useMousePosition from "../../hooks/useMousePosition";

import './TaskHandle.css';

function TaskHandle({width, height, handleKey, updateTaskHandle}) {
  const [clientX, , setIsListening] = useMousePosition(handleKey);
  function handleMouseDown(e) {
    setIsListening(true);
  };

  useEffect(() => {
    updateTaskHandle(clientX)
  }, [clientX, updateTaskHandle]);

  return (
    <div
      onMouseDown={handleMouseDown}
      className="TaskHandle"
      style={{
        height: height,
      }}
    >
    </div>
  );
}

export default TaskHandle;
