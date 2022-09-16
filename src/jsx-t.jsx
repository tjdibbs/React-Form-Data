import React from "react";

const data = ["timi", "learning", "Javascript", "Typescript", "Jsx"];

const employeesData = [
  {
    name: "Timi",
    age: 22,
  },
  {
    name: "Theo",
    age: 25,
  },
  {
    name: "David",
    age: 29,
  },
  {
    name: "Ayomi",
    age: 35,
  },
];

// const jsxGroup = [
//   <div className="div" key="1">
//     Div Tag
//   </div>,
//   <div className="form" key="2">
//     Form Tag
//   </div>,
//   <div className="footer" key="3">
//     Footer page
//   </div>,
// ];

const Form = () => {
  const [employees, setEmployees] = React.useState(employeesData);

  const handleClick = function () {
    let newEmployee = {
      name: "Shanthan",
      age: Math.floor(Math.random() * 100) + 20 * 3,
    };
    //   Updating a state with callback function
    //   setEmployees((prevState) => {
    //     return [...prevState, newEmployee];
    //   });

    // Updating a state byb restructuring
    setEmployees([...employees, newEmployee]);
  };

  return (
    <form action="">
      <button
        className="form-label"
        style={{ margin: "2px", marginTop: "" }}
        type="button"
        onClick={handleClick}
      >
        Add more employee
      </button>

      {/* {data
        .filter((item, i) => i % 2 === 0)
        .sort()
        .map((item, i) => {
          return (
            <div className="item" key={i}>
              {item}
            </div>
          );
        })} */}

      {/* Displaying Employees */}
      <table
        style={{
          borderCollapse: "collapse",
          maxHeight: "70vh",
          overflow: "auto",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr
                className="employee"
                key={employee.age}
                onClick={() => {
                  let employee_age = employee.age;

                  let newEmployees = employees.filter((item, i) => {
                    if (item.age === employee_age) {
                      return false;
                    } else if (item.age !== employee_age) {
                      return true;
                    }

                    // return item.age !== employee_age;
                  });

                  setEmployees(newEmployees);
                }}
              >
                <td
                  className="name"
                  style={{ padding: "10px", border: "1px solid grey" }}
                >
                  {employee.name}
                </td>
                <td
                  className="age"
                  style={{ padding: "10px", border: "1px solid grey" }}
                >
                  {employee.age}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
};

export default Form;
