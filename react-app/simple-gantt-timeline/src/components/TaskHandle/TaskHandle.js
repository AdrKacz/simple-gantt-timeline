import useMousePosition from "../../hooks/useMousePosition";

import './TaskHandle.css';

function TaskHandle({width, height, handleSelected, handleKey}) {
  handleSelected = handleSelected ?? ((_) => (undefined));

  // Optmise handler to not update at every frame
  const [offsetX, offsetY, setIsListening] = useMousePosition(handleKey);
  console.log(`[${handleKey}] Mouse Position: X > ${offsetX} - Y > ${offsetY}`)

  function handleMouseDown(e) {
    setIsListening(true);
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      className="TaskHandle"
      style={{
        width: width,
        height: height,
      }}
    >
    </div>
  );
}

export default TaskHandle;
