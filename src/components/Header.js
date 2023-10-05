import React from 'react'
import { Link } from 'react-router-dom'
import Canvas from './Canvas'
export default function Header({ state, setState, addToCart, decreaseCount, removeFromCart, handleAddToCart, handleRemoveFromCart, count, setCount, test, addToCartOne }) {

  return (
    <header className='mt-3 mb-2'>
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6">
            <h3><Link style={{ color: "#000", textDecoration: "none" }} to="/">AnaSayfa</Link></h3>
          </div>
          <div className="col-6 col-sm-6 col-md-6">
            <div className="d-flex justify-content-end position-relative">
              <Canvas test={test} addToCartOne={addToCartOne} count={count} setCount={setCount} addToCart={addToCart} decreaseCount={decreaseCount} removeFromCart={removeFromCart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} state={state} setState={setState} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
