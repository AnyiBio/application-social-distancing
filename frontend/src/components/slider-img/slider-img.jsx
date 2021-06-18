import React from 'react';
import Slider from "react-slick";
import beach from '../../assets/img/beach-umbrella.jpeg';
import pencil from '../../assets/img/pencil-distancing.jpeg';
import smile from '../../assets/img/smile-face.jpeg';
import sign from '../../assets/img/warning-sign.jpeg';
import distancing from '../../assets/img/distancing-town.jpeg';
import './slider-img.css';

const SliderImg = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
      return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={beach} alt="beach"/>
                </div>
                <div>
                    <img src={pencil} alt="pencil"/>
                </div>
                <div>
                    <img src={smile} alt="smile"/>
                </div>
                <div>
                    <img src={sign} alt="sign"/>
                </div>
                <div>
                    <img src={distancing} alt="distancing"/>
                </div>
            </Slider>
        </div>
      );
}
 
export default SliderImg;