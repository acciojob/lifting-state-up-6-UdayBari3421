import React from "react";

const Todo = ({ todos, setTodos }) => {
  return (
    <div>
      <div>
        <h2>Child Component</h2>
      </div>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item.title}
            {item.visisble == true ? (
              <button
                onClick={() => setTodos([...todos], (item.visisble = false))}
              >
                Complete
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
