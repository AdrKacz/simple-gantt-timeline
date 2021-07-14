import './TaskCreator.css';

function TaskCreator({absoluteTop, absoluteLeft, width, height, dayWidth, taskHeigh, createTask}) {
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;

    const column = Math.floor(offsetX / dayWidth);
    const row = Math.floor(offsetY / taskHeigh);

    createTask(column, row)
  }

  return (
    <div
    className="TaskCreator"
    onClick={handleClick}
    style={{
      top: absoluteTop,
      left: absoluteLeft,
      width: width,
      height: height,
    }}
    >
    </div>
  );
}

export default TaskCreator;
