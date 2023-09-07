import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="slide slide1">
                        <div className="content">
                            <div className="icon">
                                <h2>Dinguz</h2>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h3>Formatio nde lvl 1</h3>
                        <p>et plei nd'autre truc</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
