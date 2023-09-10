import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Tests = () => {

    function enterCardOver(card2, card) {
        document.getElementById(card).classList.add("over-card");
        document.getElementById(card2).classList.add("not-overed-card");
    }

    function leaveCardOver(card2, card) {
        document.getElementById(card).classList.remove("over-card");
        document.getElementById(card2).classList.remove("not-overed-card");
    }

    return (
        <div className="tests">
            <div className="cards">
                <div className="card card-1" id="card-1" onMouseEnter={() => enterCardOver("card-2", "card-1")} onMouseLeave={() => leaveCardOver("card-2", "card-1")}>
                    <h2>Formation de niveau 1 (Médical et industriel)</h2>
                    <ul className="card-ul">
                        <li className="card-li">- PCR niveau 1</li>
                        <li className="card-li">- Renouvellement PCR Niveau 1</li>
                    </ul>
                    <span className="infos">
                        <span className="icon">
                            <AiOutlinePlus />
                        </span>
                        <p>d'infos...</p>
                    </span>
                </div>
                <div className="card card-2" id="card-2" onMouseEnter={() => enterCardOver("card-1", "card-2")} onMouseLeave={() => leaveCardOver("card-1", "card-2")}>
                    <h2>Formation de niveau 2 (Médical et industriel)</h2>
                    <ul className="card-ul">
                        <li className="card-li">- PCR niveau 2 sources scellées et générateurs de RX</li>
                        <li className="card-li">- PCR Niveau 2 Sources scellées, Non scellées et générateurs de RX</li>
                        <li className="card-li">- Renouvellement PCR Niveau 2 toute option</li>
                    </ul>
                    <span className="infos">
                        <span className="icon">
                            <AiOutlinePlus />
                        </span>
                        <p>d'infos...</p>
                    </span>
                </div>
            </div>

            <div className="test-themes">
                <div className="bg">Backgound</div>
                <div className="deriv-bg">Deriv Background</div>
                <div className="main-color">Main Color</div>
                <div className="deriv-main-color">Deriv Main Color</div>
                <div className="second-main-color">Second Main Color</div>
                <div className="text-color-aff">
                    <span className="text-color">Text Color</span>
                    <span className="deriv-text-color">Deriv Text Color</span>
                    <span className="second-text-color">Second Text Color</span>
                    <span className="deriv-second-text-color">Deriv Second Text Color</span>
                </div>
            </div>
        </div>
    );
};

export default Tests;