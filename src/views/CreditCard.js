import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ModalCreditCard from '../components/ModalCreditCard';

const CreditCard = ({ history, plan, changeTypePlan, confirmData, otherPlan }) => {

  return (
    <Fragment>
      <header className="bg-purple p-2 mb-3">
        <h5 className="m-0">
          <Link to="/" className="fas fa-arrow-left text-white text-decoration-none m-2" />
          Tus datos
        </h5>
      </header>
      <form onSubmit={(e) => confirmData(history, e)} className="row p-0 m-0" >
        <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 m-auto p-3">
          <div className="form-group">
            <label className="font-weight-bold">Nombre y Apellidos</label>
            <input name="name" className="form-control rounded-0" required />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Número de tarjeta</label>
            <input name="creditCard" className="form-control rounded-0" />
          </div>
          <div className="row p-0 m-0">
            <div className="form-group col-6 p-0 pr-2">
              <label className="font-weight-bold">F. Expira</label>
              <input name="expire" className="form-control rounded-0" />
            </div>
            <div className="form-group col-6 p-0 pl-2">
              <label className="font-weight-bold">CVC</label>
              <input name="cvc" className="form-control rounded-0" />
            </div>
          </div>
          <button className="btn btn-purple text-white btn-block rounded-0" type="submit">Pagar S/ {plan.price}</button>
        </div>
      </form>
      <ModalCreditCard plan={plan} changeTypePlan={changeTypePlan} otherPlan={otherPlan} />
    </Fragment>
  )
}

export default (CreditCard);