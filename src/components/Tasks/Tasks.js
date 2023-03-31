import React from "react";

import TasksList from "./TasksList";

const Tasks = (props) => {
  return <TasksList tasks={props.data}></TasksList>;
};

export default Tasks;
