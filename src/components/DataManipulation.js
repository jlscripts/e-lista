import React from "react";

import AddTask from "./AddTask/AddTaskBtn";
import FilterTask from "./FilterTasks/FilterTaskBtn";
import SortTask from "./SortTasks/SortTaskBtn";

import classes from "./DataManipulation.module.css";

const Functions = (props) => {
  return (
    <div className={classes.dataManipulationContainer}>
      <AddTask onClickNewTask={props.onClickNewTask}></AddTask>
      <FilterTask></FilterTask>
      <SortTask></SortTask>
    </div>
  );
};

export default Functions;
