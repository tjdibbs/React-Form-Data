import React from "react";
import Todos from "./todos";
import "../styles/todo.css";

const Todo = () => {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    let check = todos.some((item) => item === todo);

    if (check == true) {
      alert("The task is already added!.");
      return;
    } else {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const onChange = (e) => {
    let value = e.target.value;
    setTodo(value);
  };

  React.useEffect(() => {
    console.log({ todos });

    // removing the second parameter of the
    // useEffect makes the effect run everytime the component render;

    // An empty array specified as second paramenter
    // makes the effect run at first render of the component;

    // The effects listen to change event of it's dependency
    // so it's runs everytime one of the dependency change/update;
  }, [todos]);

  return (
    <div className="todo-container" style={{ margin: "10px", marginTop: 2 }}>
      <div className="title">Simple Todo</div>
      <div className="main">
        <form action="#" onSubmit={onSubmit} className="form">
          <div className="form-group">
            <input
              type="text"
              value={todo}
              className="form-control"
              onChange={onChange}
            />
          </div>
          <button className="add-btn" type="submit">
            Add To Todo
          </button>
        </form>
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Todo;
