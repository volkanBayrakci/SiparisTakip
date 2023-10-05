import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useDownloadExcel } from 'react-export-table-to-excel';
import Test from "./Test";


export default function Basket({ state, setState, removeFromCart }) {

  const [date, setDate] = useState(getDate());
  const [name, setName] = useState()
  const [title, setTitle] = useState();
  const [phone, setPhone] = useState();
  const [mail, setMail] = useState();
  const [adress, setAdress] = useState();



  const componentPDF = useRef();
  const componentEXCEL = useRef();

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}.${month}.${year}`;
  }

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: componentEXCEL.current,
  })

  const handleRemoveFromCart = id => {
    removeFromCart(id);
  };


  const totalCartAmount = state.cart
    .reduce((total, item) => (total += item.count * item.price), 0)
    .toFixed(0);

  const totalCartAmountKDV = state.cart
    .reduce((total, item) => (total += item.count * item.price * 20 / 100), 0)
    .toFixed(0);

  return (
    <>
      <div className="container d-flex justify-content-end mt-5 mb-5 ">
        <button className="btn btn-success me-1" onClick={generatePDF}>PDF</button>
        <button className="btn btn-success me-1" onClick={onDownload}>Excel</button>
        <Test date={date} setDate={setDate} name={name} setName={setName} title={title} setTitle={setTitle} phone={phone} setPhone={setPhone} mail={mail} setMail={setMail} adress={adress} setAdress={setAdress} getDate={getDate} />
      </div>
      {state.cart.length === 0 ? <h2 className="pt-5 pb-5" style={{textAlign:"center" ,}}>Sepetinizde Ürün Yok :(</h2> :  <div ref={componentPDF} className="container">
        <div className="row mt-5">
          <div ref={componentEXCEL} className="col-md-12">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Ürün Kodu</th>
                    <th scope="col">Ürün Adı</th>
                    <th scope="col">Ürün Adeti</th>
                    <th scope="col">Ürün Fiyatı</th>
                    {
                      title ? <th scope="col">Ünvan</th> : null
                    }
                    <th scope="col">Tarih</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    state.cart.map(item => (
                      <tr>
                        <th scope="row"> {item.productCode} </th>
                        <td>{item.title} <b>({item.category})</b></td>
                        <td> {item.count === 0 ? <button onClick={() => handleRemoveFromCart(item.id)} type="button" className="btn btn-light">Ürünü Sepetten Çıkarın</button> : item.count} </td>
                        <td> {item.price * item.count}  &#8378; </td>
                        {
                          title ? <td>{title}</td> : null
                        }
                        <td>{date}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-9 mt-5">
            <h5>Müşteri Bilgileri : </h5>
            <p> <b>Tarih :</b>  {date}</p>
            <p> <b>İsim Soyİsim : </b>{name}</p>
            <p> <b>Ünvan : </b>{title}</p>
            <p> <b>Telefon:</b>  {phone}</p>
            <p> <b> Mail :</b>{mail}</p>
            <p><b>Adres :</b> {adress}</p>
          </div>
          <div className="col-md-3 mt-5">
              <h5>Fiyat : </h5>
              <hr></hr>
              <p>KDV Tutarı : %20</p>
              <hr></hr>
              <p>KDV Dahil Fiyat :{Number(totalCartAmount) + Number(totalCartAmountKDV)} &#8378;  </p>
              <hr></hr>
              <p>KDV Hariç Fiyat : {totalCartAmount} &#8378; </p>
          </div>
        </div>
      </div> }
     
    </>
  )
}
