import React from "react";

import classes from "./TaskDate.module.css";

const TaskDate = (props) => {
  return (
    <div className={`${classes.taskDate} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default TaskDate;
