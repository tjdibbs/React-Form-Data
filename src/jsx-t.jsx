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

function getRandomString() {
  let alAphabet = "abcdefghijklmnopqrstuvwxyz123456789_)(*&^%$#@!";
  let wordLength = Math.floor(Math.random() * 15) + 5;
  let word = "";

  while (wordLength > 0) {
    let letterToAddIndex = Math.floor(Math.random() * 46);
    let letter = alAphabet.at(letterToAddIndex);

    word = word + letter; // "b" + "t" = "bt";
    wordLength = wordLength - 1;
  }

  return word;
}

const Form = () => {
  const [employees, setEmployees] = React.useState(employeesData);

  const handleClick = function () {
    let newEmployee = {
      name: getRandomString(),
      age: Math.floor(Math.random() * 100) + 20 * 3,
    };
    //   Updating a state with callback function
    //   setEmployees((prevState) => {
    //     return [...prevState, newEmployee];
    //   });

    // Updating a state byb restructuring
    setEmployees([...employees, newEmployee]);
  };

  const handleRowClick = (employee) => {
    // let employee_age = employee.age;

    let newEmployees = employees.filter((employ, index) => {
      // if (employ.age === employee.age) {
      //   return false;
      // } else if (employ.age !== employee.age) {
      //   return true;
      // }

      return employ.age !== employee.age; // is employ.age not equal not
    });

    setEmployees(newEmployees);
  };

  return (
    <form action="">
      <button
        className="form-label"
        style={{ margin: "2px", marginTop: 2 }}
        type="button"
        onClick={handleClick}
      >
        Add more employee
      </button>

      {data
        .filter((item, i) => {
          let remainder = i % 2; // 4 % 3 = 1
          let check = remainder === 0; // x === y
          return check;
        })
        .sort()
        .map((item, i) => {
          return (
            <div className="item" key={i}>
              {item}
            </div>
          );
        })}

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
            <th>Add/Remove</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr className="employee" key={employee.age}>
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
                <td>
                  <button onClick={handleClick} type="button">
                    Add
                  </button>
                  <button
                    onClick={() => handleRowClick(employee)}
                    type="button"
                  >
                    Remove
                  </button>
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
