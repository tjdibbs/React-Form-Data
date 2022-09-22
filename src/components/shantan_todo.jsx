import React from "react";
import "./todo.css";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    let val = e.target.value;
    setTask(val);
    // console.log(val);
  };

  const handleSubmit = async (e) => {
    // data will be empty at first call of the function
    e.preventDefault();

    // Updating Data state using setData
    setData([...data, task]);

    // it is the state of the data before the function was called that will be logged out;
    // console.log(data);
  };

  // Object format console is to add more description log outputs
  console.log({ data: data, task: task });

  return (
    <div className="todo-container">
      <h1>TODO FORM</h1>

      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="add-task"
            type="text"
            placeholder="Add Task"
            name="todo"
            onChange={handleChange}
          />
          <button className="todo-btn" type="submit">
            Add
          </button>
        </div>

        <div className="data-container">{data.map()}</div>
      </form>
    </div>
  );
};

export default ToDo;
