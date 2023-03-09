import React from "react";
import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <>
      <NewTask />
      <Tasks />
    </>
  );
}

export default App;
