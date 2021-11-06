import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const Counter = (props) => {
  console.log(props);
  //   let count = 5;
  const [count, setCount] = React.useState(5);

  const countUp = () => {
    setCount(count + 1);
    // count++;
    // alert(count);
  };
  const countDown = () => {
    setCount(count - 1);
    // count++;
    // alert(count);
  };
  let isLight = props.theme == "light";
  return (
    <div
      style={{
        color: isLight ? "black" : "white",
        backgroundColor: isLight ? "white" : "black",
      }}
    >
      <h5>My Counter</h5>
      <Button variant="contained" color="secondary" onClick={countDown}>
        -
      </Button>{" "}
      {count}{" "}
      <Button variant="contained" color="primary" onClick={countUp}>
        <AddIcon />
      </Button>{" "}
      <br />
      Current count value is {count}
      {count < 5 && <div>Count is in dangerous state</div>}
      {count < 5 ? <div>Red Counter</div> : <div>Green Counter</div>}
      <hr />
    </div>
  );
};

export default Counter;
