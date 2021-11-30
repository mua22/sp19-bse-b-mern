import logo from "./logo.svg";

import Counter from "./components/examples/Counter";
import SortTest from "./components/SortTest";
import React from "react";
import Products from "./components/products/Products";
import { Route, Routes } from "react-router";
import Dashboard from "./views/Dashboard";
import { Link } from "react-router-dom";
import Login from "./views/auth/Login";
import SingleProductDetails from "./components/products/SingleProductDetails";
import ProductForm from "./components/products/ProductForm";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/products/details/:id"
          element={<SingleProductDetails />}
        />
        <Route path="/products/create" element={<ProductForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
