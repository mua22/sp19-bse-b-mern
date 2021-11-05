import React from "react";
const Counter = () => {
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
  return (
    <div>
      <h5>My Counter</h5>
      <button className="btn btn-danger" onClick={countDown}>
        -
      </button>{" "}
      {count} <button onClick={countUp}>+</button> <br />
      Current count value is {count}
      {count < 5 && <div>Count is in dangerous state</div>}
      {count < 5 ? <div>Red Counter</div> : <div>Green Counter</div>}
      <hr />
    </div>
  );
};

export default Counter;
