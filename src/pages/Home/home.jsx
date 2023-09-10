import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import imgAgenda from "../../assets/Agenda.jpg";

const Home = () => {
    return (
        <div className="body">
            <div className="card-animation">
                <div>
                    <i></i>
                    <h2></h2>
                    <p></p>
                </div>
            </div>
            <div className="body-formation">
                <div className="card card-formation-1">
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
                <div className="card card-formation-2">
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
