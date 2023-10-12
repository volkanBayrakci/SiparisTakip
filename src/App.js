import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { data } from "./data.js";
import Product from "./components/Product.js";
import Header from "./components/Header.js";
import Basket from "./components/Basket.js";



function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState("")
  const [state, setState] = useState({
    productList: data,
    cart: [],
  })

  const addToCart = product =>
    setState({
      ...state,
      cart: state.cart.find(cartItem => cartItem.id === product.id)
        ? state.cart.map(cartItem =>
          cartItem.id === product.id
            ? { ...cartItem, count: Number(cartItem.count) + 1 }
            : cartItem

        )
        : [...state.cart, { ...product, count: 1 }]
    });

  const addToCartOne = product =>
    setState({
      ...state,
      cart: state.cart.find(cartItem => cartItem.id === product.id)
        ? state.cart.map(cartItem =>
          cartItem.id === product.id
            ? { ...cartItem, count: cartItem.count = count }
            : cartItem
        )
        : [...state.cart, { ...product, count: count }]
    });

  const decreaseCount = id => {
    setState({
      ...state,
      cart: state.cart.map(cartItem =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 0 }
          : cartItem
      )
    });
  };

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });


  const searchProduct = state.productList.filter((product) => {
    return Object.keys(product).some((key) =>
      product[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const test = (item) => {
    addToCartOne(item);
  };

  const handleRemoveFromCart = id => {
    removeFromCart(id);
  };


  return (
    <>
      <Header test={test} addToCartOne={addToCartOne} count={count} setCount={setCount} state={state} setState={setState} addToCart={addToCart} decreaseCount={decreaseCount} removeFromCart={removeFromCart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
      <Routes>
        <Route path="/" element={<Product handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} state={state} setState={setState} removeFromCart={removeFromCart} decreaseCount={decreaseCount} addToCart={addToCart} searchProduct={searchProduct} search={search} setSearch={setSearch} />} />
        <Route path="basket" element={<Basket removeFromCart={removeFromCart} state={state} setState={setState} />} />
      </Routes>
    </>
  );
}


export default App;
