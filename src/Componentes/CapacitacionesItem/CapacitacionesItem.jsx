import React from 'react';

function CapacitacionesItem(props) {
  return (
    <div className="item modal_item" data-index={props.index}>
        <div className="image">
            <img src="assets/img/thumb63-43.jpg" alt="" />
            <div className="overlay_image" data-img-url={props.imagen}></div>
        </div>
        <div className="overlay"></div>
        <div className="title_holder">
            <p>
                <span className="date">{props.modalidad}</span>
                <span className="type">{props.plataforma}</span>
            </p>
            <h3>{props.curso}</h3>
        </div>
        <div className="hidden_information">
            <div className="image">
                <img src="assets/img/thumb4-3.jpg" alt="" />
                <div className="main" data-img-url={props.imagen}></div>
            </div>
            <div className="description">
                <h3>{props.curso}</h3>
                <p>
                    {props.descripcion}
                </p>
            </div>
        </div>
    </div>
  );
}

export default CapacitacionesItem;