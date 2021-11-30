import { Button, TextField } from "@mui/material";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const ProductForm = () => {
  const [product, setProduct] = React.useState({
    name: "Lenovo",
    price: 429,
    color: "white",
    department: "Clothing",
    description: "The Football Is Good For Training And Recreational Purposes",
  });
  const navigate = useNavigate();
  return (
    <div>
      <h3>Product Form</h3>
      <Button
        variant="contained"
        onClick={(e) => {
          axios
            .post("https://usman-recipes.herokuapp.com/api/products", product)
            .then((res) => {
              console.log(res.data);
              navigate("/products");
            });
        }}
      >
        Save
      </Button>
      <TextField
        label="Product Name"
        fullWidth
        variant="standard"
        value={product.name}
        onChange={(e) => {
          console.log(e.target.value);
          setProduct({ ...product, name: e.target.value });
        }}
      />
      <TextField
        label="Price"
        fullWidth
        variant="standard"
        value={product.price}
        onChange={(e) => {
          console.log(e.target.value);
          setProduct({ ...product, price: e.target.value });
        }}
      />
      <TextField
        label="color"
        fullWidth
        variant="standard"
        value={product.color}
        onChange={(e) => {
          console.log(e.target.value);
          setProduct({ ...product, color: e.target.value });
        }}
      />
      <TextField
        label="department"
        fullWidth
        variant="standard"
        value={product.department}
        onChange={(e) => {
          console.log(e.target.value);
          setProduct({ ...product, department: e.target.value });
        }}
      />
      <TextField
        label="description"
        multiline
        rows={4}
        fullWidth
        variant="standard"
        value={product.description}
        onChange={(e) => {
          console.log(e.target.value);
          setProduct({ ...product, description: e.target.value });
        }}
      />
    </div>
  );
};

export default ProductForm;
