import React from "react";
import ChildTodo from "./childTodo";

const Todos = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  return (
    <div className="lists-of-todo">
      {todos.map((todo, index) => {
        return (
          <ChildTodo
            todos={todos}
            todo={todo}
            index={index}
            setTodos={setTodos}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Todos;
