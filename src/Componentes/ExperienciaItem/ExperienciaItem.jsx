import React from 'react';

function ExperienciaItem(props) {
  return (
    <div className="item_in">
        <div className="description">
            <p>
                {props.descripcion}
            </p>
        </div>
        <div className="title">
            <a href={props.certificado ?? "#"} target="_blank">
                <span className="image" data-img-url={props.icono}></span>
            </a>
            <h3>
                {props.empresa}
            </h3>
            <p>
                {props.fecha}
            </p>
            <p>
                {props.contrato}
            </p>
        </div>
    </div>
  );
}

export default ExperienciaItem;