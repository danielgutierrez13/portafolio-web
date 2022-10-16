import React from 'react';

function PortafolioItem(props) {
  return (
    <div className="item modal_item" data-index={props.index}>
        <div className="image">
            <img src="assets/img/thumb6-7.jpg" alt="" />
            <div className="overlay_image" data-img-url={props.imagen}></div>
        </div>
        <div className="overlay"></div>
        <div className="title_holder">
            <h3>
                <span>{props.titulo}<span className="icon"><img className="svg" src="assets/img/svg/arrow-right.svg" alt="svg" /></span></span>
            </h3>
            <p>{props.caracteristica}</p>
        </div>
        <div className="hidden_information">
            <div className="image">
                <img src="assets/img/thumb4-3.jpg" alt="" />
                <div className="main" data-img-url={props.imagen}></div>
            </div>
            <div className="description">
                <h3>{props.titulo}</h3>
                <p>
                    {props.descripcion}
                </p>
                
            </div>
        </div>
    </div>
  );
}

export default PortafolioItem;