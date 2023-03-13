import React, { useState } from "react";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler = async (tasktext) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-http-36f5f-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          body: JSON.stringify({ text: tasktext }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request Failed!");
      }

      const data = await response.json();

      const generateId = data.name;
      const createdTask = { id: generateId, text: tasktext };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }

    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
