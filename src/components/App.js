import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "Learn React",
      visisble: false,
    },
    {
      title: "Build a React app",
      visisble: false,
    },
    {
      title: "Deploye the React app",
      visisble: false,
    },
  ]);

  function handleComplete(index) {
    setTodos([...todos], (todos[index].visisble = true));
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Todo todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
