import "./DragDependencyBox.css";

function DragDependencyBox({positionX, positionY}) {
  return (
    <div
      className="DragDependencyBox"
      style={{
        top: positionY,
        left: positionX,
      }}
    />
  )
};

export default DragDependencyBox;
