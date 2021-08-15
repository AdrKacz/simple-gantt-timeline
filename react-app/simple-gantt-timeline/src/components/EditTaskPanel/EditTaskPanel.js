// NOTE: Look at https://www.npmjs.com/package/react-select for improvement


import { useState } from "react";
import Select from "react-select"

import './EditTaskPanel.css';

function EditTaskPanel({taskObject, editTaskObject, deleteDependencyFrom, deleteTaskObject, findTaskLabel}) {
  const [selectedOption, setSelectionOption] = useState()

  function handleOptionChange(newSelectedOption) {
    setSelectionOption(newSelectedOption);
  }

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

  function handleDeleteButton(e) {
    e.preventDefault();
    e.stopPropagation();

    deleteTaskObject({...taskObject})
  }

  function handleDeleteDependencyButton(e) {
    e.preventDefault();
    e.stopPropagation();

    deleteDependencyFrom(taskObject.Id, selectedOption.value)
  }

  const optionsToSelect = Array.from(
    new Set([...(taskObject.linkedTo ?? new Set()), ...(taskObject.linkedFrom ?? new Set())])
  ).map((value, i) => (
    {value: value, label: findTaskLabel(value)}
  ))

  const insideForm = (
    <>
      <input
        className="taskname"
        value={taskObject.Name}
        onChange={handleNameChange}
        type="text"
        placeholder="Write a task name"
      />
      <button
        className="deletebutton"
        onClick={handleDeleteButton}
      >
      Delete
      </button>
      <Select
        isClearable
        value={selectedOption}
        onChange={handleOptionChange}
        options={optionsToSelect}
      />
      {selectedOption && (
        <button
          className="deletedependencybutton"
          onClick={handleDeleteDependencyButton}
        >
        Delete dependency
        </button>
      )}
    </>
  );

  return (
    <div
      onMouseUp={handleMouseUp}
      className={`EditTaskPanel${taskObject.Id ? " visible" : ""}`}
    >
      {taskObject.Id && insideForm}
    </div>
  )
};

export default EditTaskPanel;
