import React from "react";

const Todo = (props) => {
  const todos = props.todos;
  const todo = props.todo;
  const index = props.index;
  const setTodos = props.setTodos;

  const [editing, setEditing] = React.useState(false);
  const [editingText, setEditingText] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const handleDelete = (currentTodo, id) => {
    let newTodos = todos.filter((_todo, _index) => {
      if (_todo === currentTodo && id === _index) {
        return false;
      } else {
        return true;
      }
    });

    setTodos(newTodos);
  };

  const handleEdit = (todo) => {
    setEditing(true);
    setEditingText(todo);
    console.log({ editing: todo });
  };

  const Update = (currentTodo, id) => {
    let updatedTodos = todos.map((todo, index) => {
      if (currentTodo === todo && index === id) {
        return editingText;
      } else {
        return todo;
      }
    });

    console.log({ updatedTodos });
    setTodos(updatedTodos);
    setEditing(false);
  };

  const handleChange = (e) => {
    setEditingText(e.target.innerText);
  };

  const Checked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="todo" key={index}>
      <input
        type="checkbox"
        onChange={Checked}
        name={"complete" + index}
        id={"task" + index}
      />
      <span
        dangerouslySetInnerHTML={{ __html: todo }}
        style={
          editing
            ? {
                flexGrow: 1,
                border: "2px solid grey",
                padding: "5px 10px",
                borderRadius: "10px",
                marginRight: 10,
                background: "#fff",
                color: "#00000080",
              }
            : {
                flexGrow: 1,
                textDecoration: checked ? "line-through" : "none",
              }
        }
        onKeyUp={editing ? handleChange : undefined}
        className="label"
        contentEditable={editing}
      />
      {checked ? (
        <i>Completed</i>
      ) : (
        <div className="action-btn">
          <button
            className="edit"
            onClick={
              editing ? () => Update(todo, index) : () => handleEdit(todo)
            }
          >
            {/* If editing the icon will change to update icons, otherwise the icon will be edit icon */}
            {editing ? (
              <span className="material-symbols-outlined">update</span>
            ) : (
              <span className="material-symbols-outlined">edit</span>
            )}
          </button>
          <button className="delete" onClick={() => handleDelete(todo, index)}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
