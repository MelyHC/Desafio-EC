import React from 'react';
import { Link } from 'react-router-dom';

const CardSuscription = ({ plan: { price, description, pack } }) => {
  return (
    <div className="card col-10">
      <div>
        <h1>S/ {price} / AL MES</h1>
        <p className="m-0">{description}</p>
      </div>
      {
        pack ?
          pack.map(({ num, description }) =>
            <p key={num} className="mb-0 mx-3">
              <i className="fas fa-check" />
              {description}</p>
          )
          : <p>Esperando lista ...</p>
      }
      <Link to="/datos" className="btn btn-primary" >Suscribirme</Link>
    </div>
  );
}

export default CardSuscription;