import React from "react";

const Todo = (props) => {
  const { todos, handleComplete } = props;
  return (
    <ul>
      <h2>Child Component</h2>
      {todos.map((item, index) => (
        <li key={index}>
          {item.title}
          {!item.visisble && (
            <button onClick={() => handleComplete(index)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todo;
