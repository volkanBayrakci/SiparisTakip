import React from 'react'
import { BsTrash, BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Canvas({ state, setState, addToCart, removeFromCart, decreaseCount, handleAddToCart, handleRemoveFromCart, count, setCount, test, addToCartOne }) {

  const totalCount = state.cart.reduce((toplam, cart) => toplam = toplam + Number(cart.count), 0)

  return (
    <>
      <button style={{ padding: "0" }} class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <BsCart4 style={{ width: "26px", height: "26px" }} /> <span style={{ width: "22px", height: "22px", fontSize: "12px", fontWeight: "bold" }} class="d-flex align-items-center justify-content-center position-absolute top-0 start-100 translate-middle p-2 bg-light border border-light rounded-circle">{totalCount}</span> </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel"> Sepetim({totalCount})</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body" >
          {state.cart.length === 0 ? <h5 style={{ textAlign: "center", marginTop: "50px" }}>Üzgünüz Sepetinizde Ürün Yok  &#129402; </h5> : state.cart.map((item) => (
            <div style={{ fontSize: "12px" }}>
              <p> Ürün Kodu :  {item.productCode} </p>
              <p> Ürün adı :{item.title} <b>({item.category})</b></p>
              <p> Ürün : {item.count} - {item.price * item.count} &#8378;</p>
              <div className="d-flex align-items-center">
                <span style={{ cursor: "pointer", fontSize: "16px", marginRight: "8px" }} onClick={() => handleRemoveFromCart(item.id)} >
                  <BsTrash />
                </span>
                <button onClick={() => decreaseCount(item.id)} type="button" className="btn btn-outline-ligth">-</button>
                <span onKeyUp={() => test(item)}>
                  <input  onChange={(e) => setCount(e.target.value)} style={{ width: "50px", textAlign: "center" }} type="text" />
                </span>
                <button onClick={() => handleAddToCart(item)} type="button" className="btn btn-outline-ligth ">+</button>
              </div>
              <hr></hr>
            </div>
          ))}
          <Link to="/basket">
            <button style={{ position: "absolute", bottom: "0", right: "0", borderRadius: "0", padding: "10px" }} type="button" className='btn btn-dark w-100' data-bs-dismiss="offcanvas" aria-label="Close">Sipariş Özeti </button>
          </Link>
        </div>
      </div>
    </>
  )
}
