import React, { Fragment } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Confirmation = ({ name, plan: { type, price, description } }) => {
  return (
    <Fragment>
      <Header />
      <div className="text-center">
        <i className="fas fa-check bg-white rounded-circle w-0 p-3 mt-5 mb-3 icon-big" />
        <div className="row m-0 p-0">
          <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 m-auto">
            <p className="font-weight-bold">
              Bienvenio {name}
              <br />
              has adquirido el
            </p>
            <h3 className="font-weight-bolder">Plan {type}</h3>
            <h5 className="font-weight-bold">S/{price} al mes</h5>
            <p className="">{description} {description} </p>
            <Link className="link text-body font-weight-bold" to="/">Ir a ver mi plan</Link>
          </div>
        </div>
        <a href="https://mag.elcomercio.pe/" target="_blank" className="fixed-bottom link text-body m-3" rel="noopener noreferrer">Ir a Mag.pe</a>
      </div>
    </Fragment>
  )
}

export default Confirmation;