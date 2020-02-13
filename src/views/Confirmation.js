import React, { Fragment } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Confirmation = ({ name, typePlan, price, descrption }) => {
  return (
    <Fragment>
      <Header />
      <img />
      <h6>Bienvenio {name} has adquirido el</h6>
      <h4>Plan {typePlan}</h4>
      <h5>S/{price} al mes</h5>
      <p>{descrption}</p>
      <Link>Ir a ver mi plan</Link>
      <footer>
        <a>Ir a Mag.pe</a>
      </footer>
    </Fragment>
  )
}

export default Confirmation;