import React from "react";
import Slider from "../../components/Slider/Carousel";


const Addres = () => {
    const slides = [
        { title: "beach" },
        { title: "boat" },
        { title: "forest" },
      ];
      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };
    return (
        <div>
          <div style={containerStyles}>
            <Slider slides={slides} />
          </div>
        </div>
      );
};

export default Addres;
