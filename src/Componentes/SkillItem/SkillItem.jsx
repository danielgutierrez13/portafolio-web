import React from 'react';

function SkillItem(props) {
  return (
    <li className="masonry_item">
        <div className="item">
            <span className="icon"><img className="svg custom" src={props.icono} alt="icono" /></span>
            <h3>
                <span className="prefix"></span><span className="edrea_counter" data-to={props.porcentaje}
                    data-speed="2000"></span><span className="suffix">%</span>
            </h3>
            <p>{props.nombre}</p>
        </div>
    </li>
  );
}

export default SkillItem;