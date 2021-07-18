import { useState, useEffect } from "react";
import getStoreWithRow from "../helpers/getStoreWithRow";

import {
  fetchStore as fetchLocalStore,
  updateStore as updateLocalStore,
  registrationInformation as registrationLocalInformation
} from "./LocalStore"

import RegisterStore from "../components/RegisterStore/RegisterStore"

// AWS functions
async function fetchAWSStore(information) {

  const response = await fetch(information.apiEndpoint, {
    method: 'POST',
    body: JSON.stringify({
      action: 'scan',
    }),
  });

  return await response.json();
}

async function updateAWSStore(information, item) {

  const response = await fetch(information.apiEndpoint, {
    method: 'POST',
    body: JSON.stringify({
      action: 'update',
      item: {
        ...item,
        StartDate: new Date(item.StartDate).toISOString(),
        DueDate: new Date(item.DueDate).toISOString(),
      }
    }),
  });

  return await response.json();
}

const registrationAWSInformation = {apiEndpoint: "url"};

// For now it only works with AWS setup or local
const storeFunctions = {
  'aws': {
    'fetch': fetchAWSStore,
    'update': updateAWSStore
  },
  'local': {
    'fetch': fetchLocalStore,
    'update': updateLocalStore
  }
};

const storeInformation = {
  'aws': {
    params: registrationAWSInformation,
    label: "AWS",
  },
  'local': {
    params: registrationLocalInformation,
    label: "Local (your work won't be saved)",
  },
}

// "https://0zqu3fq0l8.execute-api.eu-north-1.amazonaws.com/default/gantt-timeline"

// {
//   storeType: "aws",
//   apiEndpoint: "https://0zqu3fq0l8.execute-api.eu-north-1.amazonaws.com/default/gantt-timeline",
// }

// function registerStore() {
//
// };

function useStore() {
  const [registrationInformation, setRegistrationInformation] = useState({})
  const [store, setStore] = useState(null);
  const [localUpdateStoreWith, setLocalUpdateStoreWith] = useState(null);

  // Update function
  function setUpdateStoreWith(item) {
    setLocalUpdateStoreWith(item);
    setStore(null); // to avoid display false information, have to be improved
  }

  function submitOptions(selectedOption, options) {
    setRegistrationInformation({
      storeType: selectedOption,
      ...options,
    })
  }

  // Fetch
  useEffect(() => {
    if (!registrationInformation.storeType) { // security update
      return;
    }

    let isMounted = true;
    storeFunctions[registrationInformation.storeType].fetch(registrationInformation).then(response => {
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
  }, [registrationInformation])

  // Update
  useEffect(() => {
    if (!registrationInformation.storeType) { // security update
      return;
    }

    if (localUpdateStoreWith === null) {
      return;
    };
    // Has something to update
    let isMounted = true;
    storeFunctions[registrationInformation.storeType].update(registrationInformation, localUpdateStoreWith).then(response => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.result;
      console.count("... Update Data");
      console.log(data);
    }).then((_) => {
      return storeFunctions[registrationInformation.storeType].fetch(registrationInformation);
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
  }, [registrationInformation, localUpdateStoreWith]);

  return [
    store,
    setUpdateStoreWith,
    {
      hasToRegister: !registrationInformation.storeType,
      registrationComponent: (
        <RegisterStore
          registrationOptions={storeInformation}
          submitOptions={submitOptions}
        />
      )
    },
  ];
}

export default useStore;
