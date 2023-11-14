import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validEmail, validName } from "../../components/Regex/regex";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const recaptcha = useRef();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [recaptchaError, setRecaptchaError] = useState(false);
    const validate = (e) => {
        e.preventDefault();
        if (!validName.test(name)) {
            setNameError(true);
            return;
        } else if (!validEmail.test(email)) {
            setEmailErr(true);
            setNameError(false);
            return;
        } else if (message.length <= 25) {
            setMessageError(true);
            setEmailErr(false);
            console.log(recaptcha);
            return;
        } else if (!recaptcha.current.getValue()){
            setRecaptchaError(true);
            setMessageError(false);
            console.log("truc");
            return;
        } else {
            sendEmail(e);
            return; 
        }
    };
    const form = useRef();
    function sendEmail (e) {
        e.preventDefault();
        emailjs
            .sendForm(+
                "service_ev4rl0p",
                "template_h8q2hxg",
                form.current,
                "nb9gL0Ntt7Q7sqVco"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="placement-card-form">
            <div className="card-contact-form">
                <div className="card-contact">
                    <h1 className="title-contact">Nous Contacter</h1>
                    <div>
                        <h2>Telephone :</h2>
                        <p className="space">06.16.45.43.04</p>
                    </div>

                    <div>
                        <h2>Adresse :</h2>
                        <p className="space">62 boulevard de strasbourg</p>
                    </div>
                </div>
                <div className="card-form">
                    <form className="form" ref={form} onSubmit={validate}>
                        <label>Nom Prénom</label>
                        <input
                            type="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input"
                        />
                        {nameError && <p>Nom ou Prénom invalid</p>}
                        <label>Email</label>
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailErr && <p>L'adresse email est invalide</p>}
                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Message..."
                            onChange={(e) => setMessage(e.target.value)}
                            className="message-input input"
                        />
                        {messageError && <p>Le message doit contenir minimum 25 caractères</p>}
                        <br />
                        <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} />
                        {recaptchaError && <p>Veuillez valider le captcha</p>}
                        <button className="button-send">
                            Validé !
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
