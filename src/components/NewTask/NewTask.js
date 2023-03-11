import React, { useState } from "react";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const reponse = await fetch(
        "https://react-http-6b4a6.firebaseio.com/tasks.json",
        {
          method: "POST",
          body: JSON.stringify({ text: tasktext }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!reponse.ok) {
        throw new Error("Request Failed!");
      }

      const data = await reponse.json();
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
