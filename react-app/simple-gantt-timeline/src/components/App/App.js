import { useState, useEffect } from "react";

import Slider from "../Slider/Slider";
import TimeAxis from "../TimeAxis/TimeAxis";
import Timeline from "../Timeline/Timeline";
import Spinner from "../Spinner/Spinner";

import {
  DAY_WIDTH,
  TASK_HEIGHT,
} from "../../constants/constants";

// import useStore from "../../store/useStore";
import {
fetchStore,
updateStore
} from "../../store/useStore";

import getStoreWithRow from "../../helpers/getStoreWithRow";

import MockDatabase from "../../store/mock-database";

import './App.css';

function App() {
  // TODO: useStore hook
  const [store, setStore] = useState(null);
  const [updateStoreWith, setUpdateStoreWith] = useState(null);

  // Fetch
  useEffect(() => {
    let isMounted = true;
    fetchStore().then(response => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.result;
      console.count("... Receive Data");
      console.log(data);
      setStore(getStoreWithRow(data.Items));
    }).catch(err => {
      console.error(err);
    });

    return () => {
      isMounted = false;
    };
  }, [])

  // Update
  useEffect(() => {
    if (updateStoreWith === null) {
      return;
    };
    // Has something to update
    let isMounted = true;
    updateStore(updateStoreWith).then(response => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.result;
      console.count("... Update Data");
      console.log(data);
    }).then((_) => {
      return fetchStore();
    }).then(response => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.result;
      console.count("... Receive Data");
      console.log(data);
      setStore(getStoreWithRow(data.Items));
    }).catch(err => {
      console.error(err);
    });

    return () => {
      isMounted = false;
    }
  }, [updateStoreWith]);


  const [fromDate, setFromDate] = useState(new Date(Date.now() - 7 * 86400000))

  const topOrigin = 2 * TASK_HEIGHT;
  const leftOrigin = 0;
  // Get max number of slot in window
  const windowWidth = window.innerWidth;
  const maxSpread = Math.floor(windowWidth / DAY_WIDTH);

  function editTask(task) {
    // Do nothing if task not valid
    if (!task.Id || !task.Name || !task.StartDate || !task.DueDate) {
      return;
    };

    setUpdateStoreWith({...task});
    setStore(null); // to avoid display false informaiton, have to be improved
  }

  return (
    <div className="App">
      <Slider
      previous={(_) => (setFromDate(new Date(fromDate.getTime() - 86400000)))}
      next={(_) => (setFromDate(new Date(fromDate.getTime() + 86400000)))}
      />
      <TimeAxis
        topOrigin={topOrigin}
        leftOrigin={leftOrigin}
        maxSpread={maxSpread}
        dayWidth={DAY_WIDTH}
        dayOrigin={fromDate}
        height={TASK_HEIGHT}
      />
      {store !== null ?
        <Timeline
          fromDate={fromDate}
          topOrigin={topOrigin + 2 * TASK_HEIGHT}
          leftOrigin={leftOrigin}
          maxSpread={maxSpread}
          dayWidth={DAY_WIDTH}
          taskHeigh={TASK_HEIGHT}
          store={store}
          editStoreTask={editTask}
        /> :
        <Spinner />
      }
    </div>
  );
}

export default App;
