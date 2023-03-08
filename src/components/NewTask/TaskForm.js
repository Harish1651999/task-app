import React from "react";
import classes from "./TaskForm.module.css";

const TaskForm = () => {
  return (
    <form className={classes.form}>
      <input type="text" />
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
