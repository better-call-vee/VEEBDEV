import React from "react";
import { useState } from "react";

//the data here, we want to show in a table, but table is connected in ProductManagement.
//We want to share this file's data to one step upper file, so that that upper file can distribute the data.

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");

  const handleProductSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    if (name.length === 0) {
      setError("Not alright. go back");
      <h3>{error}</h3>;
      return; // as it's asynchronus
    }

    const newProduct = {
      name,
      price,
      quantity,
    };

    handleAddProduct(newProduct);
    setError("");
  };

  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />

        <input type="text" name="price" placeholder="Product Name" />
        <br />

        <input type="text" name="quantity" placeholder="Product Quantity" />
        <br />

        <input type="submit" value="Submit now" />
      </form>
    </div>
  );
};

export default ProductForm;
