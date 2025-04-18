import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <h3>Products: {products.length}</h3>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{product.name}</td>
              <td>{product.quantiy}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
