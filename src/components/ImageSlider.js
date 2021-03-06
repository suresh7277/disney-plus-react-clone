import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImageSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
        <Carousel {...settings} >
            <Wrap>
                <img src="/images/slider-badging.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg"/>
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider;

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(10, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
      }

    button {
        z-index: 1;
    }

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
          opacity: 1;
          transition: opacity 0.2s ease 0s;
        }
      }

`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        widht: 100%;
        height:100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 3px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);        
        }
    }
`
