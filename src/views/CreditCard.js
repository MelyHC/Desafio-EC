import React, { Fragment } from 'react';

const CreditCard = ({ price}) => {
  return (
    <Fragment>
      <header className="bg-dark text-white">
        <h4>Tus datos</h4>
      </header>
      <form>
        <div className="form-group">
          <label>Nombre y Apellidos</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>Número de tarjeta</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>F. Expira</label>
          <input type="date" className="form-control" />
        </div>
        <div className="form-group">
          <label>CVC</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit">Pagar S/ {price}</button>
      </form>
    </Fragment>
  )
}

export default CreditCard;