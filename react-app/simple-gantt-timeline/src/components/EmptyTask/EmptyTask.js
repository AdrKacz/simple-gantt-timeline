import './EmptyTask.css';

function EmptyTask({name, absoluteTop, absoluteLeft, width, height, paddingLeft, setName}) {
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  function handleChange(e) {
    e.preventDefault();
    e.stopPropagation();

    setName(e.target.value)
  }
  return (
    <div
      className="EmptyTask"
      onClick={handleClick}
      style={{
        top: absoluteTop,
        left: absoluteLeft,
        width: width,
        height: height,
        "padding-left": paddingLeft,
      }}
    >
      <input
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="Write a task name"
      />
    </div>
  );
}

export default EmptyTask;
