import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import bannerImg from '../assets/bannerImg.jpg';


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        appendDots: dots => (
          <div
            style={{
              backgroundColor: "transparent",
              borderRadius: "10px",
              padding: "10px",
              position:'absolute',
              top:'50%',
              left: '40px',
              transform:'translateY(-50%)',
              paddingLeft:'20px'
            }}
          >
            <ul className='one' style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              color: "transparent",
              borderRight: "3px white solid",
              paddingBottom :'10px',
             
            }}
          >
            0{i + 1}
          </div>
        )
      };

    return (
        <section id='banner' className="relative">
            <Slider {...settings}>
                <div>
                    <img src={bannerImg} alt="" className="w-full h-auto" />
                </div>
                <div>
                    <img src={bannerImg} alt="" className="w-full h-auto" />
                </div>
                <div>
                    <img src={bannerImg} alt="" className="w-full h-auto" />
                </div>
                <div>
                    <img src={bannerImg} alt="" className="w-full h-auto" />
                </div>
            </Slider>
        </section>
    );
}

export default Banner;
