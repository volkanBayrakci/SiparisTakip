
function Product({ removeFromCart, search, setSearch, searchProduct, addToCart, decreaseCount, canvas, handleAddToCart, handleRemoveFromCart }) {
  return (
    <>
      <section className="product-list">
        <div className="container">
          <h1 className="text-center mt-4">Ürün Listesi</h1>
          <div className="my-3 input-group">
            <input
              placeholder="Arama Kutusu"
              className="form-control"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="table-responsive-sm" style={{height:"75vh" , overflow:"auto"}}>
            <table className="table table-sm table-striped table-bordered table-hover text-nowrap">
              <thead>
                <tr>
                  <td>Ürün Kodu</td>
                  <td>Ürün Adı</td>
                  <td>Ürün Hacmi</td>
                  <td>Ürün Fiyatı</td>
                  <td>Ürün Adeti</td>
                </tr>
              </thead>
              <tbody>
                {searchProduct.map((item) => (
                  <tr key={item.id}>
                    <td>{item.productCode}</td>
                    <td>{item.title}{item.category === "" ? null  : <b> ({item.category}) </b>}</td>
                    <td>{item.ML}</td>
                    <td>{item.price} &#8378; </td>
                    <td>
                      <div className="d-flex justify-content-around align-items-center ">
                        {/* <button onClick={() => decreaseCount(item.id)} type="button" className="btn btn-light">-</button>
                        <button onClick={() => handleRemoveFromCart(item.id)} type="button" className="btn btn-light"> x </button> */}
                        <button onClick={() => handleAddToCart(item)} type="button" className="btn btn-light">Sepete Ekle</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
