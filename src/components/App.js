import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build a React app",
    "Deploye the React app",
  ]);

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Todo todos={todos} />
    </div>
  );
};

export default App;
