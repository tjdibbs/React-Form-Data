import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  // username to get the state value and setUsername to set state value
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   console.log("use effect");
  // });

  // This function runs when the component is rendering
  // React.useLayoutEffect(() => {
  //   console.log("Layout effect");
  // });

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name; // "username" | "password"

    // updating the state of the formData
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    // remove the defualt action
    e.preventDefault();
    setData([...data, formData]);
    setFormData({ username: "", password: "" });
  };

  console.log({ data });

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-title">Form Fields</div>
      </header>
      <main className="main-content">
        {/* ctrl-z to go back */}
        {/* ctrl-y to go front */}

        <form action="" onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="text"
              value={formData.username}
              placeholder="username"
              name="username"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={formData.password}
              placeholder="password"
              name="password"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="action">
            <button type="submit">Submit form</button>
          </div>
        </form>

        {data.map((formdata, index) => {
          return (
            <div className="div" key={index}>
              <div>username: {formdata.username}</div>
              <div>password: {formdata.password}</div>
              <hr />
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
