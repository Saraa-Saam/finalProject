import { useState } from "react";
import { Link } from "react-router-dom";
import { addItemCartApi } from "../../api";
import { addItemWishListApi } from "../../api/wishlist";

export default function ProductItem({
    imageCover,
    category,
    title = "",
    price,
    ratingsAverage,
    id,
}) {
    const [isAddedToWishList, setIsAddedToWishList] = useState(false);

    const handleAddToCart = () => addItemCartApi(id);
    const handleAddToWishList = () => {
        setIsAddedToWishList(true);
        addItemWishListApi(id);
    };

    return (
        <div className="cursor-pointer flex flex-col gap-3 p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            <Link to={`/product-details/${id}`} key={id}>
                <img
                    src={imageCover}
                    alt={title}
                    className="rounded-lg w-full h-52 object-cover"
                />
            </Link>

            <p className="mt-2 text-green-600 text-sm">{category.name}</p>

            <h6 className="font-bold text-lg">
                {title.split(" ").slice(0, 2).join(" ")}
            </h6>

            <div className="flex justify-between items-center text-sm text-gray-600">
                <p className="font-semibold">{price} EGP</p>
                <div className="flex items-center">
                    <i className="fa-solid fa-star text-yellow-300"></i>
                    <span className="ml-1">{ratingsAverage}</span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-2">
                <button
                    className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition duration-200"
                    onClick={handleAddToCart}
                >
                    + Add
                </button>
                <i
                    className={`fa-solid fa-heart text-2xl hover:text-red-600 ${
                        isAddedToWishList ? "text-red-600" : ""
                    }`}
                    onClick={handleAddToWishList}
                ></i>
            </div>
        </div>
    );
}
