const localStore =  {
  "1" : {
    Id: "1",
    Name: "This is a task",
    StartDate: new Date(Date.now() - 2 * 86400000),
    DueDate: new Date(Date.now() + 86400000),
  },
};

export async function fetchStore(_) {
  const response = new Promise((resolve, reject) => {
    resolve({
      result: {
        Items: Object.values(localStore)
      }
    });
  });

  return await response;
}

export async function updateStore(_, items) {
  // TODO: Check if Id is valid
  const response = new Promise((resolve, reject) => {
    items.forEach((item, i) => {
      localStore[item.Id] = {...item};
    });
    resolve({
      result: {}
    });
  });

  return await response;
}

export async function deleteItems(_, items) {
  // TODO: Check if Id is valid
  const response = new Promise((resolve, reject) => {
    items.forEach((item, i) => {
      if (item.linkedFrom) {
        item.linkedFrom.forEach((itemId, i) => {
          localStore[itemId].linkedTo.delete(item.Id);
        });
      }
      delete localStore[item.Id];
    });
    resolve({
      result: {}
    });
  });

  return await response;
}

export const registrationInformation = {};
