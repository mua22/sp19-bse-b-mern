import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = React.useState([
    // { name: "Lenovo", price: 10 },
    // { name: "Dell", price: 20 },
  ]);
  const getData = async () => {
    try {
      let response = await axios.get(
        "https://usman-recipes.herokuapp.com/api/products"
      );
      setProducts(response.data);
    } catch (err) {}
  };
  React.useEffect(getData, []);

  return (
    <div>
      <Link to="/products/create">Create New Product</Link>
      {products.map((p) => (
        <SingleProduct product={p} onDelete={getData} />
      ))}
    </div>
  );
};

export default Products;
