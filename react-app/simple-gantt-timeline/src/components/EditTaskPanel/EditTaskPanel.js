import './EditTaskPanel.css';

function EditTaskPanel({taskObject, editTaskObject}) {
  function handleMouseUp(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function handleNameChange(e) {
    e.preventDefault();
    e.stopPropagation();

    editTaskObject({
      ...taskObject,
      Name: e.target.value,
    })
  }

  return (
    <div
      onMouseUp={handleMouseUp}
      className={`EditTaskPanel${taskObject.Id ? " visible" : ""}`}
    >
      {taskObject.Id && (
        <input
          className="taskname"
          value={taskObject.Name}
          onChange={handleNameChange}
          type="text"
          placeholder="Write a task name"
        />
      )}
    </div>
  )
};

export default EditTaskPanel;
