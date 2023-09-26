import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
// import automaticDoor from "../../components/automatic-door/automatic-door";
import imgAgenda from "../../assets/Agenda.jpg";
import imgMaps from "../../assets/itineraire-maps.jpg";
import imgYannick from "../../assets/Yannick.jpg";
import pLeft from "../../assets/Logo_p-leftsvg.svg";
import pRight from "../../assets/Logo_p-rightsvg.svg";
import Modal from "../../components/Modal/modal";

const Home = () => {
    const [openModalForm1, setOpenModalForm1] = useState(false);

    const [openModalForm2, setOpenModalForm2] = useState(false);

    return (
        <div className="body">
            <div className="card-animation">
                <div className="banner">
                    <h3 className="titlte-banner">
                        Formation en radio Protection <br /> Medical et
                        Industriel
                    </h3>
                    <div className="img-content-banner">
                        <img className="img-banner" src={imgYannick} alt="" />
                        <p className="content-banner">
                            Bonjour et Bienvenu ! <br /> CRPCR est une
                            entreprise de formation des Personne Compétente en
                            Radioprotection. <br /> Vous trouverz sur ce site
                            plus d'information sur les formations ainsi que la
                            possibilité de nous contacter.
                        </p>
                    </div>
                </div>
                <div className="door">
                    <div className="background-door-left">
                        <img className="icone-door-left" src={pLeft} alt="" />
                    </div>
                    <div className="background-door-right">
                        <img className="icone-door-right" src={pRight} alt="" />
                    </div>
                </div>
            </div>
            <Modal
                modalId="la-calotte-de-ses-morts"
                h2="Personne Compétente en Radioprotection de niveau 1"
                p="j'ai plein de truc a dire genre vraiment beaucoup beaucoup <br /> un autre turc"
                liste11="-PCR niveau 1"
                liste21="-PCR niveau 1"
                img={imgAgenda}
                h3="Itinéraire Formation"
                button=""
                isOpen={openModalForm1}
                updateModal={setOpenModalForm1}
            />
            <Modal
                modalId="la-calotte-de-ses-morts-2"
                h2="Personne Compétente en Radioprotection de niveau 1"
                p="j'ai plein de truc a dire genre vraiment beaucoup beaucoup <br /> un autre turc"
                liste11="-PCR niveau 2 sources scellées et générateurs de RX"
                liste12="-PCR Niveau 2 Sources scellées, Non scellées et générateurs de RX"
                img={imgAgenda}
                h3="Itinéraire Formation"
                imgAdress={imgMaps}
                buttonAdresse=""
                buttonMaps=""
                isOpen={openModalForm2}
                updateModal={setOpenModalForm2}
            />
            <div className="body-formation">
                <div
                    className="card card-formation-1"
                    onClick={() => setOpenModalForm1(true)}
                >
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
                <div
                    className="card card-formation-2"
                    onClick={() => setOpenModalForm2(true)}
                >
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
            <div className="contact">
                <button className="button-contact">
                    <p className="content-contact">Contact</p>
                    <p className="clique-contact">Clique !</p>
                    <span className="radio">&#9762;</span>
                </button>
            </div>
        </div>
    );
};

export default Home;
