import React from "react";
import useHttp from "../hooks/use-http";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (tasktext, taskData) => {
    const generateId = taskData.name;
    const createdTask = { id: generateId, text: tasktext };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (tasktext) => {
    sendTaskRequest(
      {
        url: "https://react-http-36f5f-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: tasktext },
      },
      createTask.bind(null, tasktext)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
