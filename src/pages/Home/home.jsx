import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import automaticDoor from "../../components/automatic-door/automatic-door";
import imgAgenda from "../../assets/Agenda.jpg";
import pLeft from "../../assets/Logo_p-leftsvg.svg";
import pRight from "../../assets/Logo_p-rightsvg.svg";
import Modal from '../../components/Modal/modal';

const Home = () => {

    const [openModalForm1, setOpenModalForm1] = useState(false);

    const [openModalForm2, setOpenModalForm2] = useState(false);

    return (
        <div className="body">
            <div className="card-animation">
                <div className="bannière">
                    <h3>lel</h3>
                </div>
                <div className="door">
                    <div className="background-door-left">
                        <img className="icone-door-left" src={pLeft} />
                    </div>
                    <div className="background-door-right">
                        <img className="icone-door-right" src={pRight} />
                    </div>
                </div>
            </div>
            <Modal modalId="la-calotte-de-ses-morts" truc="coucou 1" isOpen={openModalForm1} updateModal={setOpenModalForm1} />
            <Modal modalId="la-calotte-de-ses-morts-2" truc="coucou 2" isOpen={openModalForm2} updateModal={setOpenModalForm2} />
            <div className="body-formation">
                <div className="card card-formation-1" onClick={() => setOpenModalForm1(true)}>
                    <h2>
                        Formation de niveau 1<br />
                        (Médical et industriel)
                    </h2>

                    <ul className="list-formation">
                        <li>- PCR niveau 1</li>
                        <li>- Renouvellement PCR Niveau 1</li>
                    </ul>
                    <span>
                        <i>
                            <AiOutlineArrowRight />
                        </i>
                    </span>
                </div>
                <div className="card card-formation-2" onClick={() => setOpenModalForm2(true)}>
                    <h2>
                        Formation de niveau 2<br />
                        (Médical et industriel)
                    </h2>
                    <ul className="list-formation">
                        <li>
                            - PCR niveau 2 sources scellées et générateurs de RX
                        </li>
                        <li>
                            - PCR Niveau 2 Sources scellées,
                            <br /> Non scellées et générateurs de RX
                        </li>
                        <li>- Renouvellement PCR Niveau 2 toute option</li>
                    </ul>
                    <span>
                        <i>
                            <AiOutlineArrowRight />
                        </i>
                    </span>
                </div>
            </div>
            <div className="carousselles-avis"></div>
            <div className="contact"></div>
        </div>
    );
};

export default Home;
