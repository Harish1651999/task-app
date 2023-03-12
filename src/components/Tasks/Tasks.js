import React from "react";
import Section from "../UI/Section";
import classes from "./Tasks.module.css";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  let tasklist = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    tasklist = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.key}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = tasklist;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = "Loading tasks...";
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
