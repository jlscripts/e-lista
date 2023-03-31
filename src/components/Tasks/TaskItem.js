import React from "react";

import TaskDate from "./TaskDate";

import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  return (
    <li>
      <div className={classes.taskContainer}>
        <TaskDate>
          <div>{props.deadline.getDate()}</div>
          <div>
            {props.deadline
              .toLocaleString("default", { month: "long" })
              .substring(0, 3)}
          </div>
        </TaskDate>
        <div className={classes.taskContent}>
          <h3>{props.taskName}</h3>
          <div>{props.category}</div>
          <div>{props.taskNotes}</div>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
