import React, {useState} from 'react';
import axios from "axios";

function Contactame() {

    const estadoInicialFormulario = { asunto: '', email: '', mensaje: '' };
    const [datos, setDatos] = useState(estadoInicialFormulario);

    const [estado, setEstado] = useState(false);

    const gestionarCampo = (event) => {
        const { name, value } = event.target;
        setDatos({ ...datos, [name]: value });
    }

    const enviarEmail = async () => {
        let asunto = datos.asunto;
        let email = datos.email;
        let mensaje = datos.mensaje;
        console.log(asunto, email, mensaje)
        try {
            await axios.post("https://node-express-smtp-email.herokuapp.com/api/form", {
                email,
                asunto,
                mensaje
            });
            setEstado(true);
            setDatos(estadoInicialFormulario)
            setTimeout(() => {
                setEstado(false);
            }, 3000);
        } catch (error) {
            setEstado(false);
        }
    }

    return (
        <section id="contact">
            <div className="edrea_contact">
                <div className="container">
                    <div className="content">
                        <div className="edrea_title">
                            <p className="sub_text"><span>contacto</span></p>
                            <h3 className="title">Datos de <span>contacto</span></h3>
                        </div>

                        <div className="contact_cols">
                            <div className="contact_left">
                                <ul>
                                    <li>
                                        <div className="icon"><img src="assets/img/svg/phone.svg" alt="icon"/></div>
                                        <div className="text">
                                            <h3>Celular</h3>
                                            <p><a href="tel:+51917845429">+51 917845429</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><img src="assets/img/svg/mail.svg" alt="icon"/></div>
                                        <div className="text">
                                            <h3>Email</h3>
                                            <p><a href="mailto:dgutierrezvillegas@gmail.com">daniel.gutierrez13@outlook.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><img src="assets/img/svg/map.svg" alt="icon"/></div>
                                        <div className="text">
                                            <h3>Direccion</h3>
                                            <p>Piura - Piura -Piura<br/>AAHH Manuel Seoane,<br/>Mz H Lote 5</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact_right">
                                <form 
                                    className="edrea_contact_form" 
                                    autoComplete="off" 
                                    onSubmit={event => {
                                        event.preventDefault();
                                        enviarEmail();
                                    }}>
                                    <div hidden={estado ?  false : true }>
                                        <span id = "MensajeEnviado">
                                            Su mensaje ha sido recibido, pronto nos pondremos en contacto con usted.
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3>Contactame</h3>
                                    </div>
                                    <div className="items">
                                        <div className="item">
                                            <input 
                                                id="asunto" 
                                                type="text" 
                                                placeholder="Asunto*"
                                                name="asunto"
                                                value={datos.asunto}
                                                onChange={gestionarCampo}
                                                required
                                             />
                                        </div>
                                        <div className="item">
                                            <input 
                                                id="email" 
                                                type="email" 
                                                placeholder="Email*"
                                                name="email"
                                                value={datos.email}
                                                onChange={gestionarCampo}
                                                required
                                            />
                                        </div>
                                        <div className="item">
                                            <textarea 
                                                id="mensaje" 
                                                placeholder="Mensaje*"
                                                name="mensaje"
                                                value={datos.mensaje}
                                                onChange={gestionarCampo}
                                                required
                                            />
                                        </div>
                                        <div className="item">
                                            <button type="submit">Contactame</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contactame;