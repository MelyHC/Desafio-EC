import React, { Fragment } from 'react';
import Header from '../components/Header';
import CardSuscription from '../components/CardSuscription';

const Suscription = ({ changeTypePlan, plan }) => {
  return (
    <Fragment>
      <Header />
      <form onChange={changeTypePlan} className="">
        <div className="switch switch--horizontal">
          <input id="radio-a" value="Estándar" type="radio" name="first-switch" readOnly checked={plan.type === "Estándar"} />
          <label htmlFor="radio-a">Plan Estándar</label>
          <input id="radio-b" value="Premium" type="radio" name="first-switch" readOnly checked={plan.type === "Premium"} />
          <label htmlFor="radio-b">Plan Premium</label><span className="toggle-outside"><span className="toggle-inside"></span></span>
        </div>
        <div className="row m-0 pb-3 justify-content-center align-aitem-center">
          <CardSuscription plan={plan} />
        </div>
      </form>
    </Fragment>
  )
}

export default Suscription;