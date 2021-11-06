import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/examples/Counter";

function App() {
  return (
    <div className="App">
      <h2>Hello B Section</h2>
      <Counter
        theme="light"
        country="pakistan"
        student={{ name: "Usman", Salary: 500 }}
      />
      <Counter theme="dark" />
      <Counter theme="light" />
      <Counter theme="dark" />
    </div>
  );
}

export default App;
