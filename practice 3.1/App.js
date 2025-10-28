import React from "react";
import ProductCard from "./ProductCard";
import "./App.css"; // for outer box styles

function App() {
  return (
    <div className="container">
      <h1>Products List</h1>
      <div className="product-list">
        <ProductCard name="Wireless Mouse" price={25.99} inStock={true} />
        <ProductCard name="Keyboard" price={45.5} inStock={false} />
        <ProductCard name="Monitor" price={199.99} inStock={true} />
      </div>
    </div>
  );
}

export default App;
