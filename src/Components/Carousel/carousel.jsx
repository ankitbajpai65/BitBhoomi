"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';

const arrowStyle = {
    display: "block",
    position: 'absolute',
    top: '47%',
    zIndex: 100,
    transform: 'scale(2)'
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                ...arrowStyle,
                left: '1.5rem',
            }}
            onClick={onClick}
        />
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                ...arrowStyle,
                right: '1.5rem',
            }}
            onClick={onClick}
        />
    );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
};

const Carousel = () => {
    return (
        <div className="sliderContainer">
            <Slider {...settings}>
                <div>
                    <img src="https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908" alt="" />
                </div>
                <div>
                    <img src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE" alt="" />
                </div>
                <div>
                    <img src="https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g" alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;