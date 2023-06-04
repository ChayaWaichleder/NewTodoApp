import React from "react";

//import NewTask from "./components/FuatureTask/FeatureTask";
import Tasks from "./components/Tasks/Tasks";

const App = () => {
  const tasks = [
    {
      id: "e1",
      title: "Learn javascript",
      taskStatus: "Done",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Learn react",
      taskStatus: "Almost finish",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Build a todo app",
      taskStatus: "Work on it",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Add project to Git",
      taskStatus: "Work on it",
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <Tasks items={tasks} />
    </div>
  );
};

export default App;
