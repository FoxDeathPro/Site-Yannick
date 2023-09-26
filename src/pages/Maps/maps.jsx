import React from 'react';
import Slider from "../../components/Caroussel/slider"
import image from "../../assets/Agenda.jpg"

const maps = () => {
    return (
        <div className='slider'>
            <Slider
            images={image}/>
        </div>
    );
};

export default maps;