import React from 'react';
import $ from 'jquery';

const ModalCreditCard = ({ changeTypePlan, otherPlan, plan: { price, description, pack, descriptionPlan, type } }) => {

  $(document).mouseup((e) => {
    const container = $("#collapse-description");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.collapse('hide');
    }
  });

  return (
    <div className="fixed-bottom bg-white text-justify px-5" id="plan" >
      <div aria-haspopup="true" className="pt-3 d-flex justify-content-between" data-toggle="collapse" data-target="#collapse-description" aria-expanded="false" aria-controls="collapse-description">
        <h5 className="font-weight-bold">Plan {type}</h5>
        <h5>S/{price} al mes</h5>
      </div>
      <div id="collapse-description" className="collapse" aria-labelledby="heading-plan" data-parent="#plan">
        <p>{description}</p>
        <ul className="fa-ul ml-4">
          {
            descriptionPlan ?
              descriptionPlan.map(({ num, description }, i) =>
                <li key={num} className={`mb-0 py-1 ${pack[i] !== num ? 'text-opacity' : ''}`}>
                  <i className="fa-li fas fa-check" />
                  {description}</li>
              )
              : <p>Esperando lista ...</p>
          }
        </ul>
      </div>
      <button className="btn text-center btn-block link mb-2" value={otherPlan} onClick={changeTypePlan}>Cambiar a Plan {otherPlan ? otherPlan : 'Estándar'} </button>
    </div>
  );
}

export default ModalCreditCard;