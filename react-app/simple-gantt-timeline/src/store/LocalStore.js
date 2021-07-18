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

export async function updateStore(_, item) {
  // TODO: Check if Id is valid
  const response = new Promise((resolve, reject) => {
    localStore[item.Id] = {...item};
    resolve({
      result: {}
    });
  });

  return await response;
}

export const registrationInformation = {};
