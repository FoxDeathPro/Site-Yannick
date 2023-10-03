import React from "react";
import { NavLink } from "react-router-dom";
import logoPP from "../../assets/LogoPP.jpg";
import apercora from "../../assets/ApercoraLogo.jpg";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function footer() {
    return (
        <div className="footer">
            <div className="footer-dimension">
                <div className="footer-left">
                    <div className="footer-left-un">
                        <NavLink to="/" className="font">
                            <img
                                src={logoPP}
                                alt=""
                                className="footer-left-logoPP"
                            />
                        </NavLink>
                        <h2 className="footer-left-title-un">CRPCR</h2>
                    </div>
                    <div className="footer-left-deux">
                        <a href="https://www.apercora.com/">
                            <img
                                src={apercora}
                                alt=""
                                className="footer-left-apercora"
                            />
                        </a>
                        <h2 className="footer-left-title-deux">Apercora</h2>
                    </div>
                </div>
                <div className="footer-center">
                    <ul className="footer-center-link">
                        <li className="">
                            <NavLink to="/" className="link">
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/corp" className="link">
                                L'entreprise
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="link">
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/maps" className="link">
                                Maps
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="footer-right-icon">
                        <div className="icon">
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://www.facebook.com/profile.php?id=100076339323176"
                            >
                                <FaFacebookSquare />
                            </a>
                        </div>
                        <div className="icon">
                            <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href="https://www.linkedin.com/in/crpcr-formation-radioprotection-755773226"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className="footer-right-text">
                        <p>
                            CRPCR Formation <br /> Dirigeant : Yannick TANCRAY{" "}
                            <br />
                            Adresse : 10 Chemin du Moulinier <br />
                            14740 CARCAGNY
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;
