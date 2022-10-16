import React from 'react';
import ExperienciaItem from '../ExperienciaItem/ExperienciaItem';

function Experiencia() {
  return (
    <section id="experiencia">
        <div className="edrea_testimonials">
            <div className="container">
                <div className="content">

                    <div className="testi_left">
                        <div className="edrea_title">
                            <p className="sub_text"><span>experiencia</span></p>
                            <h3 className="title">Mi <span>Experiencia</span></h3>
                            <p className="description">
                                Experiencia profesional para el area de Tecnologias de la Información en desarrollo de sotfware para el sector privado
                            </p>
                        </div>
                    </div>

                    <div className="testi_right">
                        <div className="edrea_testi_slider">
                            <div className="owl-carousel">
                                <ExperienciaItem
                                    icono = "assets/img/PidiaIcon.png"
                                    empresa = "PIDIA S.R.L."
                                    fecha = "Febrero 2022 - Mayo 2022"
                                    descripcion = "Analista de programación y desarrollo - Practicante preprofesional."
                                    contrato = "Contrato de Practicas"
                                    certificado = "https://drive.google.com/file/d/17qMZDfts6GP45aTVwBhQqxd66C8W2rn0/view?usp=sharing"
                                />
                                <ExperienciaItem
                                    icono = "assets/img/PidiaIcon.png"
                                    empresa = "PIDIA S.R.L."
                                    fecha = "Mayo 2022 - Actualidad"
                                    descripcion = "Analista de programación Junior - Desarrollador Full Stack."
                                    contrato = "Jornada Parcial"
                                />
                                <ExperienciaItem
                                    icono = "assets/img/MDPIcom.png"
                                    empresa = "MDP Consulting"
                                    fecha = "Abril 2022 - Julio 2022"
                                    descripcion = "Analista de programación trainee - Programa Bootcamp."
                                    contrato = "Contrato de Temporal"
                                    certificado = "https://drive.google.com/file/d/1Tbuq86zKB7nRYW_TAORmIVFZU90Mbptr/view?usp=sharing"
                                />
                                <ExperienciaItem
                                    icono = "assets/img/MDPIcom.png"
                                    empresa = "MDP Consulting"
                                    fecha = "Julio 2022 - Actualidad"
                                    descripcion = "Analista de programación Junior - Desarrollador RPA."
                                    contrato = "Jornada Completa"
                                />
                            </div>
                            <div className="quote">
                                <img className="svg" src="assets/img/experiencia.png" alt="svg" />
                            </div>
                            <div className="edrea_prevnext">
                                <div className="next"><a href="#">Next</a></div>
                                <div className="prev"><a href="#">Prev</a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
}

export default Experiencia;