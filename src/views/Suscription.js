import React, { Fragment } from 'react';
import Header from '../components/Header';
import CardSuscription from '../components/CardSuscription';

const Suscription = ({ changeTypePlan, plan }) => {
  return (
    <Fragment>
      <Header />
      <form onChange={changeTypePlan} className="row m-0 justify-content-center align-aitem-center">
        <div className="switch switch--horizontal">
          <input id="radio-a" value="Estándar" type="radio" name="first-switch" />
          <label htmlFor="radio-a">Plan Estándar</label>
          <input id="radio-b" value="Premium" type="radio" name="first-switch" defaultChecked />
          <label htmlFor="radio-b">Plan Premium</label><span className="toggle-outside"><span className="toggle-inside"></span></span>
        </div>
        <CardSuscription plan={plan}/>
      </form>
    </Fragment>
  )
}

export default Suscription;