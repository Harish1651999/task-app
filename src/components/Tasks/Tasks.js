import React from "react";
import Section from "../UI/Section";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
  const tasklist = <h2>No tasks found. Start adding some!</h2>;

  return (
    <Section>
      <div className={classes.container}>{tasklist}</div>
    </Section>
  );
};

export default Tasks;
