import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "Learn React",
      visisble: true,
    },
    {
      title: "Build a React app",
      visisble: true,
    },
    {
      title: "Deploye the React app",
      visisble: true,
    },
  ]);

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
