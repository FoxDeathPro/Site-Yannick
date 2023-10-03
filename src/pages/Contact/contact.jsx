import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validEmail, validName } from "../../components/Regex/regex";
// import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    // const captchaRef = useRef(null);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [nameError, setNameError] = useState(false);
    const validate = () => {
        if (!validEmail.test(email)) {
            setEmailErr(true);
        }
        if (!validName.test(name)) {
            setNameError(true);
        }
    };
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_ev4rl0p",
                "template_axvm6ht",
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
                    <h2>Telephone :</h2>
                    <p>06.16.45.43.04</p>
                    <h2>Adresse :</h2>
                    <p>62 boulevard de strasbourg</p>
                </div>
                <div className="card-form">
                    <form className="form" ref={form} onSubmit={sendEmail}>
                        <label>Nom Prénom</label>
                        <input
                            type="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input"
                        />
                        {nameError && <p>Your name is invalid</p>}
                        <label>Email</label>
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailErr && <p>Your email is invalid</p>}
                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Message..."
                            className="message-input input"
                        />
                        <button className="button-send" onClick={validate}>
                            Validé !
                        </button>
                        {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} /> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
