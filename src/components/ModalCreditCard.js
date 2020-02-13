import React from 'react';
import { Link } from 'react-router-dom';

const ModalCreditCard = ({ currentPlan, price, description, otherPlan, list }) => {
  return (
    <div>
      <div>
        <h4>Plan {currentPlan}</h4>
        <h4>S/{price} al mes</h4>
      </div>
      <p>{description}</p>
      <ol>
        {list ?
          list.map(({ num, description }) => <li key={num}>{description}</li>)
          : <li>Esperando lista ...</li>}
      </ol>
      <Link>Cambiar a Plan {otherPlan}</Link>
    </div>
  );
}

export default ModalCreditCard;