import React, { useState } from "react";

import DataManipulation from "./DataManipulation";
import AddTaskForm from "./AddTask/AddTaskForm.";

import classes from "./Header.module.css";

const Header = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const newTaskHandler = () => {
    setIsEditing(true);
  };

  const addTaskHandler = (taskData) => {
    props.onAdd(taskData);
    setIsEditing(false);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        <h1>What's up, Name!</h1>
        <DataManipulation onClickNewTask={newTaskHandler}></DataManipulation>
      </div>
      {isEditing && (
        <AddTaskForm
          onClickAddTask={addTaskHandler}
          onCancel={cancelHandler}
        ></AddTaskForm>
      )}
    </React.Fragment>
  );
};

export default Header;
