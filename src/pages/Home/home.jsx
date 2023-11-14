import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
                        <div>
                            <p className="content-banner">
                                Je travaille dans le domaine de la
                                radioprotection Médicale depuis plus de 20ans.
                                J'ai travaillé au Centre François Baclesse de
                                Caen au sein de l'unité de Radiophysique et de
                                Radioprotection de 1999 à 2008. Depuis 2008, je
                                suis responsable du Service Compétent en
                                Radioprotection du CHU de Caen. Ma carrière m'a
                                permis de travailler dans tout les domaines
                                médicaux utilisant des rayonnements ionisants.
                            </p>

                            <ul className="content-banner-list">
                                <li>- Radiothérapie / Curiethérapie</li>
                                <li>-Médecine Nucléaire / Laboratoire</li>
                                <li>
                                    - Radiologie Interventionnelle /
                                    Conventionnelle
                                </li>
                                <li>- Bloc Opératoire</li>
                                <li>- Etc... </li>
                            </ul>
                            <p className="content-banner">
                                Je suis également Officier Expert SPV au sein du
                                SDIS14 depuis 2011. J'assure l'ensemble des
                                formations des Sapeurs-Pompiers spécialisés en
                                Risque Radiologique.
                            </p>
                        </div>
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
                liste11="- Personne Compétente en Radioprotection niveau 1"
                liste21="- Personne Compétente en Radioprotection niveau 1"
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
                liste11="- PCR niveau 2 sources scellées et générateurs de RX"
                liste12="- PCR Niveau 2 Sources scellées, Non scellées et générateurs de RX"
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
            <div className="carousselles-avis">
                
            </div>
            <div className="contact">
                <NavLink to="/contact">
                    <button className="button-contact">
                        <p className="content-contact">Contact</p>
                        <p className="clique-contact">Clique !</p>
                        <span className="radio">&#9762;</span>
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;
