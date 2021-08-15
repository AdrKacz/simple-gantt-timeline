import "./DragDependency.css";

import {
  DRAG_SIZE,
} from "../../constants/constants";

function DragDependency({originAnchor, width, height, handleMouseDown}) {
  const positionStyle = {
    width: DRAG_SIZE * 0.5,
    height: DRAG_SIZE,
    bottom: height - DRAG_SIZE * 0.1,
  }

  if (originAnchor) {
    positionStyle.top = positionStyle.bottom;
    positionStyle.bottom = undefined;
    positionStyle.left = width - DRAG_SIZE;
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      className={"DragDependency" + (!originAnchor ? " revert" : "")}
      style={positionStyle}
    >
      <div
        className="DragDependencyAntenna"
      />
      <div
        className="DragDependencyLine"
      />
    </div>
  )
}

export default DragDependency
