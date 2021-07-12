import Timeline from "../Timeline/Timeline"

import MockDatabase from "../../store/mock-database.js"

import './App.css';

function App() {
  return (
    <div className="App">
      <Timeline
        store={MockDatabase} 
      />
    </div>
  );
}

export default App;
