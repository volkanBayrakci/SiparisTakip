import React from 'react'

export default function Test({ date, setDate, name, setName, title, setTitle, phone, setPhone, mail, setMail, adress, setAdress, getDate }) {
  return (
    <>
      <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Müşteri Bilgileri Giriş
      </button>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Müşteri Bilgileri : </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-1">
                  <label for="date" className="form-label">Tarih</label>
                  <input value={date}
                    onChange={(e) => setDate(e.target.value)} type="text" className="form-control" id="date" aria-describedby="data" />
                </div>
                <div className="mb-1">
                  <label for="date" className="form-label">İsim Soyİsim</label>
                  <input value={name}
                    onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="date" aria-describedby="data" />
                </div>
                <div className="mb-1">
                  <label for="title" className="form-label">Ünvan</label>
                  <input value={title}
                    onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="title" aria-describedby="title" />
                </div>
                <div className="mb-1">
                  <label for="phone" className="form-label">Telefon Numarası</label>
                  <input value={phone}
                    onChange={(e) => setPhone(e.target.value)} type="phone" className="form-control" id="phone" />
                </div>
                <div className="mb-1">
                  <label for="mail" className="form-label">E-mail</label>
                  <input value={mail}
                    onChange={(e) => setMail(e.target.value)} type="text" className="form-control" id="mail" />
                </div>
                <div className="mb-1">
                  <label for="address">Adress</label>
                  <div className="form-floating">
                    <textarea value={adress}
                      onChange={(e) => setAdress(e.target.value)} className="form-control" placeholder="Lütfen Müşteri Adresini Giriniz" id="address"></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
