import React from "react";
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
                        <h2 className="tittle-modal">{props.h2}</h2>
                        <div className="all-modal">
                            <p className="content-modal">Formation</p>
                            <ul>
                                <li className="liste">{props.liste11}</li>
                                <li className="liste">{props.liste12}</li>
                            </ul>
                            <p className="content-modal"> Renouvellement</p>
                            <ul>
                                <li className="liste">{props.liste11}</li>
                                <li className="liste">{props.liste12}</li>
                            </ul>
                            <img className="img-modal" src={props.img} alt="" />
                            <button className="button-modal">
                                {props.button}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
