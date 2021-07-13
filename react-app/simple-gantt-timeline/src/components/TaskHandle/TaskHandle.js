import './TaskHandle.css';

function TaskHandle({width, height, handleSelected}) {
  handleSelected = handleSelected ?? ((_) => (undefined))

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    handleSelected();
  }

  return (
    <div
      onClick={handleClick}
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
