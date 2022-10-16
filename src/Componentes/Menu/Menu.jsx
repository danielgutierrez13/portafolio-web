import React from 'react';

function Menu() {
  return (
    <div>
        <div className="edrea_topbar">
            <div className="in">
                <div className="container">
                    <div className="topbar_inner">
                        <div className="logo">
                            <img src="assets/img/logo/DanielIcon.png" alt="" />
                        </div>
                        <div className="menu">
                            <ul className="anchor_nav">
                                <li className="current"><a href="#home">Inicio</a></li>
                                <li><a href="#about">Sobre mi</a></li>
                                <li><a href="#services">Servicios</a></li>
                                <li><a href="#portfolio">Portafolio</a></li>
                                <li><a href="#experiencia">Experiencia</a></li>
                                <li className="button"><a href="#contact">Contactame</a></li>
                            </ul>
                            <span className="ccc"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="edrea_mobile_menu">
			<div className="mobile_menu_inner">
				<div className="container">
					<div className="mobile_in">
						<div className="logo">
							<a href="intro.html"><img src="assets/img/logo/DanielIcon.png" alt="brand" /></a>
						</div>
						<div className="my_trigger">
							<div className="hamburger hamburger--collapse-r">
								<div className="hamburger-box">
									<div className="hamburger-inner"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="dropdown">
				<div className="container">
					<div className="dropdown_inner">
						<ul className="anchor_nav">
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#about">Sobre mi</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#portfolio">Portafolio</a></li>
                            <li><a href="#experiencia">Experiencia</a></li>
                            <li><a href="#contact">Contactame</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}

export default Menu;