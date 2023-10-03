import React from "react";
import logoPP from "../../assets/Logo_svg.svg";
import { NavLink } from "react-router-dom";

const header = () => {
    return (
        <header>
            <div className="logonav-list">
                <div className="logonav">
                    <NavLink to="/" className="font">
                        <img className="imagelogo" src={logoPP} alt="" />
                    </NavLink>
                </div>
                <nav className="list">
                    <ul>
                        <li>
                            <NavLink to="/" className="font">
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/corp" className="font">
                                L'entreprise
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="font">
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/maps" className="font">
                                Maps
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default header;
