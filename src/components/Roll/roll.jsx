import React from "react";

const roll = (props) => {
    return (
        <div className="roll">
            <div className="roll-title-content-img">
                <h2 className="roll-title-top">{props.titletop}</h2>
                <p className="roll-content">{props.content}</p>
                <h2 className="roll-title-bottom">{props.titlebottom}</h2>
                <img className={props.className}  src={props.img} alt="" />
            </div>
        </div>
    );
};

export default roll;
