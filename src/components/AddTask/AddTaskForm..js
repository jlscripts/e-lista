import React, { useRef, useState } from "react";

import classes from "./AddTaskForm.module.css";

const AddTaskForm = (props) => {
  const deadlineInputRef = useRef();
  const taskNameInputRef = useRef();
  const categoryInputRef = useRef();
  const taskNotesInputRef = useRef();

  const [isValid, setIsValid] = useState(true);

  const resetValues = () => {
    deadlineInputRef.current.value = "";
    taskNameInputRef.current.value = "";
    categoryInputRef.current.value = "";
    taskNotesInputRef.current.value = "";
    setIsValid(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !deadlineInputRef.current.value ||
      !taskNameInputRef.current.value ||
      !categoryInputRef.current.value ||
      !taskNotesInputRef.current.value
    ) {
      setIsValid(false);
      return;
    }

    const taskData = {
      id: Math.random(),
      deadline: new Date(deadlineInputRef.current.value),
      taskName: taskNameInputRef.current.value,
      category: categoryInputRef.current.value,
      taskNotes: taskNotesInputRef.current.value,
    };

    props.onClickAddTask(taskData);
    resetValues();
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label className={classes.deadline}>Deadline</label>
          <input
            ref={deadlineInputRef}
            type="date"
            className={`${
              !isValid && !deadlineInputRef.current.value && classes.invalid
            }`}
          ></input>
        </div>
        <div className={classes.levelOfPriority}>
          <label className={classes.category}>Level of priority</label>
          <select
            ref={categoryInputRef}
            name="category"
            className={`${
              !isValid && !categoryInputRef.current.value && classes.invalid
            }`}
          >
            <option hidden></option>
            <option value="urgent">Urgent</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className={classes.taskName}>
          <label>Task Name</label>
          <input
            ref={taskNameInputRef}
            type="text"
            className={`${classes.taskNameInput} ${
              !isValid && !taskNameInputRef.current.value && classes.invalid
            }`}
          ></input>
        </div>
        <div className={classes.taskNotes}>
          <label>Notes</label>
          <input
            ref={taskNotesInputRef}
            type="text"
            className={`${classes.taskNotesInput} ${
              !isValid && !taskNotesInputRef.current.value && classes.invalid
            }`}
          ></input>
        </div>
        <div className={classes.formBtns}>
          <button className={classes.addTaskBtn} type="submit">
            Add Task
          </button>
          <button
            className={classes.cancelBtn}
            onClick={props.onCancel}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
