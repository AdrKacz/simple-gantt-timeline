const store =  [
  {
    Id: "1",
    Name: "Task 1",
    StartDate: new Date(Date.now() - 2 * 86400000),
    DueDate: new Date(Date.now() + 86400000),
  },
  {
    Id: "2",
    Name: "Task 2",
    StartDate: new Date(Date.now() - 86400000),
    DueDate: new Date(Date.now() + 2 * 86400000),
  },
  {
    Id: "3",
    Name: "Task 3",
    StartDate: new Date(Date.now() - 86400000),
    DueDate: new Date(Date.now() + 86400000),
  },
  {
    Id: "4",
    Name: "Task 4",
    StartDate: new Date(Date.now() + 86400000),
    DueDate: new Date(Date.now() + 86400000),
  },
  {
    Id: "5",
    Name: "Task 5",
    StartDate: new Date(Date.now()),
    DueDate: new Date(Date.now()),
  },
  {
    Id: "6",
    Name: "Task 6",
    StartDate: new Date(Date.now() - 86400000),
    DueDate: new Date(Date.now() - 86400000),
  },
];

export default store;
