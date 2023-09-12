import React from 'react';
import { RxCross2 } from "react-icons/rx";

const Modal = (props) => {

    const closeModal = () => {
        const modal = document.getElementById(props.modalId);
        modal.classList.remove("active-modal");
        props.updateModal(false);
    }

    return (
        <>
            {props.isOpen && (
                <div className="background-modal active-modal" id={props.modalId}>
                    <div className='modal'>
                        <i className='cross' onClick={closeModal}><RxCross2 /></i>
                        {props.truc}
                    </div>
                </div>)
            }
        </>
    );
};

export default Modal;