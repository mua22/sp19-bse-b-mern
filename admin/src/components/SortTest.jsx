import React from "react";
const SortTest = () => {
  const [students, setStudents] = React.useState(["Zahid", "Mudassar", "Ali"]);
  const sortStudents = () => {
    let s = [...students];
    s.sort();
    setStudents(s);
  };
  React.useEffect(function () {
    console.log("Use Effect Called");
  });
  React.useEffect(
    function () {
      console.log("Use Effect With no dependency");
    },
    [students]
  );
  console.log("Rendering Sort Test");
  return (
    <div>
      <h3>Sort Test</h3>
      <button onClick={sortStudents}>Sort Students</button>
      <ul>
        {students.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortTest;
