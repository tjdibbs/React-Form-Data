const Todos = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const handleClick = (currentTodo, id) => {
    let newTodos = todos.filter((_todo, _index) => {
      if (_todo === currentTodo && id === _index) {
        return false;
      } else {
        return true;
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="lists-of-todo">
      {todos.map((todo, index) => {
        return (
          <div className="todo" key={index}>
            <div className="label">{todo}</div>
            <div className="action-btn">
              <button className="edit">
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button
                className="delete"
                onClick={() => handleClick(todo, index)}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
