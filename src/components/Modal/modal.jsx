import React from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Modal = (props) => {
    const closeModal = () => {
        const modal = document.getElementById(props.modalId);
        modal.classList.remove("active-modal");
        props.updateModal(false);
    };

    return (
        <>
            {props.isOpen && (
                <div
                    className="background-modal active-modal"
                    id={props.modalId}
                >
                    <div className="modal">
                        <i className="cross" onClick={closeModal}>
                            <RxCross2 />
                        </i>

                        <div className="all-modal">
                            <h2 className="tittle-modal">{props.h2}</h2>
                            <div className="display-content-modal">
                                <div className="color-content-modal">
                                    <p className="content-modal">Formation</p>
                                    <ul>
                                        <li className="liste">
                                            {props.liste11}
                                        </li>
                                        <li className="liste">
                                            {props.liste12}
                                        </li>
                                    </ul>
                                </div>
                                <div className="color-content-modal">
                                    <p className="content-modal">
                                        {" "}
                                        Renouvellement
                                    </p>
                                    <ul>
                                        <li className="liste">
                                            {props.liste11}
                                        </li>
                                        <li className="liste">
                                            {props.liste12}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="title-image-agenda">
                                <h3 className="title-agenda">
                                    Agenda de formation
                                </h3>
                                <img
                                    className="image-agenda"
                                    src={props.img}
                                    alt=""
                                />
                            </div>
                            <div className="placement-button">
                                <div className="card-address">
                                    <button className="button-contact-modal">
                                        <NavLink to="/maps" className="font">
                                        <p>Itineraire</p>
                                        </NavLink>
                                    </button>
                                    <button className="button-contact-modal">
                                        <NavLink to="/contact" className="font">
                                            <p>Contact</p>
                                        </NavLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
