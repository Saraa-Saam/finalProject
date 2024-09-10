import img1 from "./../../assets/slider-image-1.jpeg";
import img2 from "./../../assets/slider-image-2.jpeg";
import img3 from "./../../assets/slider-image-3.jpeg";
import img4 from "./../../assets/grocery-banner.png";
import img5 from "./../../assets/grocery-banner-2.jpeg";
import img6 from "./../../assets/banner-4.jpeg";
import Slider from "react-slick";

export default function MainSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="row">
            <div className="w-3/4">
                <Slider {...settings}>
                    <div>
                        <img className="w-full h-[400px]" src={img5} alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[400px]" src={img3} alt="" />
                    </div>
                </Slider>
            </div>
            <div className="w-1/4">
                <div>
                    <img src={img6} alt="" className="h-[200px]" />
                </div>
                <div>
                    <img src={img4} alt="" className="h-[200px]" />
                </div>
            </div>
        </div>
    );
}
