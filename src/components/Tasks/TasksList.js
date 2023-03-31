import React from "react";

import TaskItem from "./TaskItem";

import classes from "./TasksList.module.css";

const TasksList = (props) => {
  return (
    <React.Fragment>
      <ul className={classes.list}>
        {props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            deadline={task.deadline}
            taskName={task.taskName}
            category={task.category}
            taskNotes={task.taskNotes}
          ></TaskItem>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TasksList;
