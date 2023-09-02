import React from "react";
import logoPP from "../../assets/LogoPP.jpg";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <header>
      <div className="logonav-list">
        <div className="logonav">
          <img className="imagelogo" src={logoPP} alt="" />
        </div>
        <nav className="list">
          <ul>
            <li>
              <NavLink to="/" className="font">
                Accueil
              </NavLink>
            </li>
            <li>
            <NavLink to="/agenda" className="font">
                Agenda
              </NavLink>
            </li>
            <li>
            <NavLink to="/contact" className="font">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default header;
