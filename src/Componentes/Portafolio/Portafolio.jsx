import React from 'react';
import PortafolioItem from '../PortafolioItem/PortafolioItem';

function Portafolio() {
  return (
    <section id="portfolio">

			<div className="edrea_portfolio">
				<div className="container">
					<div className="content">

						<div className="edrea_title bg_white">
							<p className="sub_text"><span>portafolio</span></p>
							<h3 className="title">Mi <span>Portafolio</span></h3>
							<p className="description">
                Proyectos, aplicaiones, sistemas de grado academicos y profesionales
              </p>
						</div>

						<div className="edrea_portfolio_slider">

							<div className="edrea_slider_in">
								<div className="owl-carousel modal_items" data-from="portafolio" data-count="4">
									<PortafolioItem
                    index = "1"
                    titulo = "Portafolio Web"
                    caracteristica = "Tegnologias: React, Html"
                    descripcion = "Página informativa elaborada dinamicamente con tecnologias React JS, HTML. Sirve para mostrar de hoja de vida, Skill, portafoli, experiencia, capacitaciones"
                    imagen = "assets/img/portfolio/portafolio1.png"
                  />

                  <PortafolioItem
                    index = "2"
                    titulo = "Juego Wordle Consola"
                    caracteristica = "Tegnologias: Java, JSON"
                    descripcion = "Juego Para consola basado en el modelo Wordle, adaptable y parametrizado, Desarrollado en lenguaje JAVA"
                    imagen = "assets/img/portfolio/portafolio2.png"
                  />

                  <PortafolioItem
                    index = "3"
                    titulo = "Editor de Imagenes"
                    caracteristica = "Tegnologias: Java"
                    descripcion = "Editor de imagenes en Windows Form, utilizando clases de java, teoria de tratamiento de imagenes, algoritmos para el tratamiento de imagenes"
                    imagen = "assets/img/portfolio/portafolio3.png"
                  />

                  <PortafolioItem
                    index = "4"
                    titulo = "Pagina Informativa"
                    caracteristica = "Tegnologias: Symfony, PHP, Html"
                    descripcion = "Página informativa elaborada dinamicamente con tecnologias en Symfony, PHP, HTML, con la finalidad de mostrar productos a los clientes, consumiendo apis para la carga de los datos"
                    imagen = "assets/img/portfolio/portafolio4.png"
                  />
								</div>

				      </div>

							<div className="edrea_prevnext">
								<div className="next"><a href="#">Next</a></div>
								<div className="prev"><a href="#">Prev</a></div>
							</div>

						</div>

					</div>
				</div>
			</div>

		</section>
  );
}

export default Portafolio;