import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import productsData from "./vschoolProducts";
import Product from "./product";

function App() {
  const productComponents = productsData.map((item) => (
    <Product Key={item.id} product={item} />
  ));
  return <div>{productComponents}</div>;
}

export default App;
