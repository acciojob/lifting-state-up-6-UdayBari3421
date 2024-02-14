import React from "react";

const Todo = ({ todos }) => {
  return (
    <div>
      <div>
        <h2>Child Component</h2>
      </div>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={(e) => e.target.remove()}>Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
