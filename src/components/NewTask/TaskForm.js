import React, { useRef } from "react";
import classes from "./TaskForm.module.css";

const TaskForm = () => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = taskInputRef.current.value;

    console.log(enteredValue);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
