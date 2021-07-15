import { useRef, useEffect } from "react";

import './EmptyTask.css';

function EmptyTask({name, absoluteTop, absoluteLeft, width, height, paddingLeft, setName}) {
  const inputRef = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  function handleChange(e) {
    e.preventDefault();
    e.stopPropagation();

    setName(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div
      className="Task EmptyTask"
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
        className="emptytaskname"
        ref={inputRef}
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="Write a task name"
      />
    </div>
  );
}

export default EmptyTask;
