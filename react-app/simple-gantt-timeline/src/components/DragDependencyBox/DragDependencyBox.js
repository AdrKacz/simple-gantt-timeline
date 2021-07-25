import "./DragDependencyBox.css";

function DragDependencyBox({positionX, positionY}) {
  if (!positionX || !positionY) {
    return <></>;
  }
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
