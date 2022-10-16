import React from 'react';
import SkillItem from '../SkillItem/SkillItem';

function Skill() {
  return (
    <section id="information">
		<div className="edrea_information">
    		<div className="container">
				<div className="content">
					<div className="info_left">
						<ul className="masonry">
                            <SkillItem
                                nombre = "JAVA"
                                icono = "assets/img/icon/java.png"
                                porcentaje = "85"
                            />
                            <SkillItem
                                nombre = "PHP"
                                icono = "assets/img/icon/php.png"
                                porcentaje = "80"
                            />
                            <SkillItem
                                nombre = "C++"
                                icono = "assets/img/icon/c++.png"
                                porcentaje = "35"
                            />
                            <SkillItem
                                nombre = "JAVASCRIPT"
                                icono = "assets/img/icon/js.png"
                                porcentaje = "70"
                            />
                            <SkillItem
                                nombre = "HTML 5"
                                icono = "assets/img/icon/html.png"
                                porcentaje = "80"
                            />
                            <SkillItem
                                nombre = "CSS"
                                icono = "assets/img/icon/css.png"
                                porcentaje = "60"
                            />
                            <SkillItem
                                nombre = "Symfony"
                                icono = "assets/img/icon/symfony.png"
                                porcentaje = "65"
                            />
                            <SkillItem
                                nombre = "Angular"
                                icono = "assets/img/icon/angular.png"
                                porcentaje = "40"
                            />
                            <SkillItem
                                nombre = "React"
                                icono = "assets/img/icon/react.png"
                                porcentaje = "40"
                            />
                            <SkillItem
                                nombre = "RPA"
                                icono = "assets/img/icon/rpa.png"
                                porcentaje = "40"
                            />
                        </ul>
                    </div>
                    <div className="info_right">

                        <div className="edrea_title">
                            <p className="sub_text"><span>Habilidades</span></p>
                            <h3 className="title">Mis <span>Habilidades</span></h3>
                            <p className="description">
                                Practica, conocimientos entorno al area de TI tecnologias de la informacion, Habilidades en 
                                lenguajes de programción, librerias de desarrollo y automatizacion de procesos
                            </p>
                        </div>

                        <div className="edrea_checklist">
                            <ul>
                                <li>
                                    <span className="icon"><img className="svg" src="assets/img/svg/check-circle.svg"
                                            alt="svg" /></span>
                                    <h3>Desarrollo Web</h3>
                                    <p>
                                        Capacitación y practica en la implementación y desarrollo de sitios web dinamicos e intectivos
                                        para los usuarios
                                    </p>
                                </li>
                                <li>
                                    <span className="icon"><img className="svg" src="assets/img/svg/check-circle.svg"
                                            alt="svg" /></span>
                                    <h3>Automatización de procesos</h3>
                                    <p>
                                        Capacitaciones en el analisis, documentación, impletación, y pruebas de robots 
                                        Dispatcher/Performer en Uipath Studio.
                                    </p>
                                </li>
                                <br/><br/><br/><br/><br/>
                            </ul>
                        </div>
                        
                        <div className="about-image">
                            <img src="https://img.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg" alt="about image"/>
                        </div>
                        <br/><br/>
                        <div className="about-image">
                            <img src="https://www.azulweb.net/wp-content/uploads/2018/05/Cu%C3%A1l-es-el-perfil-de-un-programador.png" alt="about image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>
  );
}

export default Skill;