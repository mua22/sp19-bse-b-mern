import { Button, TextField } from "@mui/material";
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
const ProductForm = () => {
  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    color: "",
    department: "",
    description: "T",
  });
  const navigate = useNavigate();
  const params = useParams();
  const getData = async () => {
    if (params.id)
      try {
        let response = await axios.get(
          "https://usman-recipes.herokuapp.com/api/products/" + params.id
        );
        setProduct(response.data);
      } catch (err) {}
  };
  React.useEffect(getData, []);
  return (
    <div>
      <h3>{params.id ? "Edit Product" : "Create Product"}</h3>
      <Button
        variant="contained"
        onClick={(e) => {
          if (params.id)
            axios
              .put(
                "https://usman-recipes.herokuapp.com/api/products/" + params.id,
                product
              )
              .then((res) => {
                console.log(res.data);
                navigate("/products");
              });
          else
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
