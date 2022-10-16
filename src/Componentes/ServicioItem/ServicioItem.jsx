import React from 'react';

function ServicioItem(props) {
  return (
    <li className="modal_item" data-index={props.index}>
        <div className="service_item">
            <span className="icon"><img className="svg custom" src={props.icon} alt="svg" /></span>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.description}
            </p>
            <span className="arrow"><img className="svg custom" src="assets/img/svg/arrow.svg" alt="svg" /></span>

            <div className="hidden_information">
                <div className="image">
                    <img src="assets/img/thumb4-3.jpg" alt="" />
                    <div className="main" data-img-url={props.image}></div>
                </div>
                <div className="description">
                    <h3>{props.title}</h3>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    </li>
  );
}

export default ServicioItem;