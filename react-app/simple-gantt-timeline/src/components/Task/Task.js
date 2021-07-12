// TODO: Center text vertically
// TODO: CHange layout to add transparent padding

import './Task.css';

function Task({name, absoluteTop, absoluteLeft, width, height, paddingLeft}) {
  return (
    <div
      className="Task"
      style={{
        top: absoluteTop,
        left: absoluteLeft,
        width: width,
        height: height,
        "padding-left": paddingLeft,
      }}>
      {name}
    </div>
  );
}

export default Task;
