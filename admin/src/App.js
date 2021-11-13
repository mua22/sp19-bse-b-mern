import logo from "./logo.svg";

import Counter from "./components/examples/Counter";
import SortTest from "./components/SortTest";
import React from "react";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <h2>Hello B Section</h2>
      <Products />
      {/* <SortTest /> */}

      {/* <Counter
        theme="light"
        country="pakistan"
        student={{ name: "Usman", Salary: 500 }}
      />
      <Counter theme="dark" />
      <Counter theme="light" />
      <Counter theme="dark" /> */}
    </div>
  );
}

export default App;
