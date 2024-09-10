import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import { getCategoriesApi } from "../../api";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default function CategorySlider() {
    const [categories, setCategories] = useState([]);
    function getCategories() {
        getCategoriesApi()
            .then((data) => setCategories(data))
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <div className="my-5 py-5">
                <h2 className="text-2xl font-bold mb-2">
                    {" "}
                    Shop popular categories
                </h2>
                <Slider {...settings}>
                    {categories.map((category) => (
                        <div className="h-[220px]" key={category._id}>
                            <img src={category.image} className="h-full" alt />
                            <h2>{category.name}</h2>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
