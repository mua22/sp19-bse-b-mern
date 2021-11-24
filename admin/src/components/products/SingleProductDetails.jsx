import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const SingleProductDetails = (props) => {
  const params = useParams();
  const [product, setProduct] = React.useState({
    name: "Bike",
    price: "2000",
  });
  console.log(params);
  const getData = async () => {
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
      <h4>{product.name}</h4>
      <p>
        <b>Price:</b> {product.price} PKR
      </p>
      <p>{product.description}</p>
      <hr />
    </div>
  );
};

export default SingleProductDetails;
