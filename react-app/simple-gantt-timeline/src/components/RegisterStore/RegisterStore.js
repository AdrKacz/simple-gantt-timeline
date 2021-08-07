// TODO: Look at https://www.npmjs.com/package/react-select for improvement

import { useState} from "react"
import Select from "react-select"

import "./RegisterStore.css"

function RegisterStore({registrationOptions, submitOptions}) {
  const [selectedOption, setSelectionOption] = useState()
  const [options, setOptions] = useState({})

  function handleOptionChange(newSelectedOption) {
    setSelectionOption(newSelectedOption);
  }

  function handleChange(key, value) {
    setOptions({
      ...options,
      [key]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault() // Do not reload the page

    submitOptions(selectedOption.value, options)
  }

  console.log(selectedOption)
  console.log(options)

  // Convert registrationOptions to correct format for Select
  const optionsToSelect = Object.entries(registrationOptions).map(([key, value], i) => (
    {value: key, label: value.label}
  ))

  return (
    <div
      className="RegisterStore"
    >
    <p>
      Connect to your database.<br/>
    </p>
    <form onSubmit={handleSubmit}>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        options={optionsToSelect}
      />
      {selectedOption && Object.entries((registrationOptions[selectedOption.value].params || {})).length > 0 && (
        <span className="separationline"/>
      )}
      {selectedOption && (
        Object.entries((registrationOptions[selectedOption.value].params || {})).map(([key, value], i) => (
          <div className="registerinformation" key={key}>
          <label className="registerinformationlabel" htmlFor={key}>{key}</label>
          <input required
            className="registerinformationinput"
            type={value}
            name={key}
            value={options[key]}
            onChange={(e) => (handleChange(key, e.target.value))}/>
          </ div>
        ))
      )}
      <input type="submit" value="Validate" />
    </form>

    <div className="formfooter">
      <span>
      Don't have a database?
      </span>
      <a href="https://github.com/AdrKacz/simple-gantt-timeline/blob/main/aws/README.md" target="_blank" rel="noreferrer">
      Create your database
      </a>
    </div>
    </div>
  )
}

export default RegisterStore;
