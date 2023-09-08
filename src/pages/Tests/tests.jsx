import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Tests = () => {
    return (
        <div className="tests">
            <div className="cards">
                <div className="card card-1">
                    <h2>Formation de niveau 1</h2>
                    <ul>
                        <li>Machin de bidule</li>
                        <li>Machin de bidule</li>
                    </ul>
                    <span className="infos">
                        <span className="icon">
                            <AiOutlinePlus />
                        </span>
                        <p>d'infos...</p>
                    </span>
                </div>
                <div className="card card-2">
                    <h2>Formation de niveau 2</h2>
                    <ul>
                        <li>Machin de bidule</li>
                        <li>Machin de bidule</li>
                        <li>Machin de bidule du truc de muche</li>
                    </ul>
                    <span className="infos">
                        <span className="icon">
                            <AiOutlinePlus />
                        </span>
                        <p>d'infos...</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Tests;