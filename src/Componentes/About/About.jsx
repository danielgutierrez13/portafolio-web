import React from 'react';

function About() {
  return (
    <section id="about">
        <div className="edrea_about">
            <div className="container">
                <div className="about_in">
                    <div className="about-image">
                        <img src="assets/img/foto.png" alt="about image"/>
                    </div>
                    <div className="content">
                        <div className="edrea_title">
                            <p className="sub_text"><span>Sobre Mi</span></p>
                            <h3 className="title">Daniel <span>Gutierrez</span></h3>
                            <h5 className="sub-title">Junior <strong>Developer</strong></h5>
                            <p className="description">Desarrollador Web Full-Stack, RPA Uipath (automatización de procesos)</p>
                            <p className="description">Estudiante de Ingeniería Informática, en la Universidad Nacional de Piura 
                                centrado en Lenguaje JAVA. Formación y Experiencia enfocada al desarrollo web con tecnologías en 
                                JavaScript, HTML5, CSS, PHP y frameworks como Symfony, AngularJS. Enfoque en crear código limpio, 
                                reutilizable y optimizarlo de cara a los nuevos enfoques para el desarrollo de software. 
                                Preparación y capacitaciones en automatización de procesos con Robots Dispatcher/Performer en Uipath Studio.
                            </p>
                            <div className="edrea_button">
                                <a href="https://drive.google.com/file/d/1Zj5pVnGZjmuQzxdnySAPGiyNoafYc85j/view?usp=sharing" target= "_blank" >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;