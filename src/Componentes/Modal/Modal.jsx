import React from 'react';

function Modal() {
  return (
    <div className="edrea_modalbox">
		<div className="box_inner">
			<div className="close">
				<a href="#servicio"><img className="svg" src="assets/img/svg/cancel.svg" alt="" /></a>
			</div>
			<div className="modal_content">
				<h3 className="fixed_title">
                </h3>
				<div className="modal_in">
				</div>

				<div className="edrea_prevnext" data-index="" data-from="">
					<div className="next"><a href="#">Next</a></div>
					<div className="prev"><a href="#">Prev</a></div>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Modal;