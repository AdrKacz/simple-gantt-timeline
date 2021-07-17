const APIEndpoint = "https://0zqu3fq0l8.execute-api.eu-north-1.amazonaws.com/default/gantt-timeline";

export async function fetchStore() {

  const response = await fetch(APIEndpoint, {
    method: 'POST',
    body: JSON.stringify({
      action: 'scan',
    }),
  });

  return await response.json();
}

export async function updateStore(item) {

  const response = await fetch(APIEndpoint, {
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
