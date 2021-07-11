import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";

import './App.css';

function App() {
  return (
    <div className="AppRoot-fullPage">
      <div className="AsanaMain">
        <div className="AsanaMain-mainLayer">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
