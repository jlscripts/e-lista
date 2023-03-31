import React, { useState } from "react";

import Header from "./components/Header";
import WelcomeModal from "./UI/WelcomeModal";
import Tasks from "./components/Tasks/Tasks";

const tasksArray = [
  {
    id: 1,
    deadline: new Date(2023, 1, 20),
    taskName: "Task 1",
    category: "none",
    taskNotes: "Perform any tasks",
  },
  {
    id: 2,
    deadline: new Date(2023, 1, 22),
    taskName: "Task 2",
    category: "none",
    taskNotes: "Perform any tasks",
  },
];

const App = () => {
  const [allTasks, setAllTasks] = useState(tasksArray);
  const addTaskHandler = (taskData) => {
    setAllTasks((prevState) => [taskData, ...prevState]);
  };

  return (
    <React.Fragment>
      {/* <WelcomeModal></WelcomeModal> */}
      <Header onAdd={addTaskHandler}></Header>
      <Tasks data={allTasks}></Tasks>
    </React.Fragment>
  );
};

export default App;
