import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { addItemCartApi, getProductApi } from "../../api";
import { addItemWishListApi } from "../../api/wishlist";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
};

export default function ProductDetails() {
    let { id } = useParams();
    const [isAddedToWishList, setIsAddedToWishList] = useState(false);
    const [product, setProduct] = useState({
        images: [],
        title: "",
        description: "",
        ratingsAverage: 0,
        price: 0,
    });

    const getDetails = () => {
        getProductApi(id).then((data) => {
            setProduct(data);
        });
    };

    useEffect(() => {
        getDetails();
    }, []);

    const handleAddToCart = () => addItemCartApi(id);

    const handleAddToWishList = () => {
        setIsAddedToWishList(true);
        addItemWishListApi(id);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="w-full">
                    <Slider {...settings}>
                        {product.images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`Product image ${index + 1}`}
                                    className="w-full h-96 object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                    <h2 className="text-2xl font-bold">{product.title}</h2>
                    <p className="text-gray-600">{product.description}</p>

                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">
                            {product.price} EGP
                        </span>
                        <div className="flex items-center text-yellow-500">
                            <i className="fa fa-star mr-1"></i>
                            <span className="text-gray-600">
                                {product.ratingsAverage}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <button
                            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 cursor-pointer"
                            onClick={handleAddToCart}
                        >
                            + Add to Cart
                        </button>
                        <i
                            className={`fa-solid fa-heart text-3xl hover:text-red-500 cursor-pointer ${
                                isAddedToWishList ? "text-red-500" : ""
                            }`}
                            onClick={handleAddToWishList}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
