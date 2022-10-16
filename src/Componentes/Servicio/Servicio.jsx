import React from 'react';
import ServicioItem from '../ServicioItem/ServicioItem';

function Servicio() {
  return (
    <section id="services">
        <div className="edrea_services">
            <div className="container">
                <div className="content">
                    <div className="service_left">
                        <div className="edrea_title bg_white">
                            <p className="sub_text"><span>servicios</span></p>
                            <h3 className="title">Mis <span>servicios</span></h3>
                            <p className="description">Se ofrece una gama alta de sitios web, paginas informativas, 
                                con conexiones a bases de datos</p>
                        </div>
                    </div>
                    <div className="service_right">
                        <ul className="edrea_service_list modal_items" data-from="servicios" data-count="2">
                            <ServicioItem
                                icon = "assets/img/svg/check-circle.svg"
                                title = "Paginas Informativas"
                                description = "Una página web informativa, brinda información sobre un negocio, sobre sus productos o servicios."
                                image = "assets/img/pagina_informativa.png"
                                index = "1"
                            />
                            <ServicioItem
                                icon = "assets/img/excel.png"
                                title = "Formularios y Macros en Excel"
                                description = "Facilita la manera de registrar, editar, eliminar o visualizar datos en una hoja de calculo"
                                image = "assets/img/formularios_excel.png"
                                index = "2"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Servicio;