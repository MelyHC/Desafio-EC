import React from 'react';
import { Link } from 'react-router-dom';

const CardSuscription = ({ plan: { price, description, pack, descriptionPlan } }) => {
  return (
    <div className="card col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 p-0 rounded-0">
      <div className="p-3 border-bottom text-center">
        <h1 className="title-price"><span className="simbol-price">S/</span> <span className="price">{price}</span> / AL MES</h1>
        <p className="m-0 font-weight-bold">{description}</p>
      </div>
      <ul className="fa-ul py-4 pr-4 pl-2">
        {
          descriptionPlan ?
            descriptionPlan.map(({ num, description }, i) =>
              <li key={num} className={`mb-0 py-2 ${pack[i] !== num ? 'text-opacity' : ''}`}>
                <i className="fa-li fas fa-check" />
                {description}</li>
            )
            : <p>Esperando lista ...</p>
        }
      </ul>
      <Link to="/datos" className="btn btn-purple text-white rounded-0 p-3" >Suscribirme</Link>
    </div>
  );
}

export default CardSuscription;