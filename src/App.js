import React, { useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = () => {};

  return (
    <>
      <NewTask onFetch={fetchTasks} />
      <Tasks />
    </>
  );
}

export default App;
