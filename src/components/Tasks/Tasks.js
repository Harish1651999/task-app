import React from "react";
import Section from "../UI/Section";
import classes from "./Tasks.module.css";

const Tasks = () => {
  return (
    <Section>
      <div className={classes.container}>
        <h2>No tasks found. Start adding some!</h2>
      </div>
    </Section>
  );
};

export default Tasks;
