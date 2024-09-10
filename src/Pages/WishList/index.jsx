import { useEffect, useState } from "react";
import WishListCard from "../../Components/Cards/WishListCard";
import {
    addItemCartApi,
    deleteItemWishListApi,
    getWishListApi,
} from "../../api";

export default function WishList() {
    const [wishList, setWishList] = useState([]);

    const getWishList = () => {
        getWishListApi()
            .then((data) => setWishList(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getWishList();
    }, []);

    const handleAddToCart = async (id) => {
        await addItemCartApi(id);
        await deleteItemWishListApi(id);
        getWishList();
    };

    const handleDeleteItemWishList = async (id) => {
        await deleteItemWishListApi(id);
        getWishList();
    };

    return (
        <div className="container mx-auto py-5 my-12 sm:my-20 px-5 bg-gray-100 rounded-lg">
            {wishList.map(({ id, imageCover, title, price }) => (
                <WishListCard
                    key={id}
                    id={id}
                    price={price}
                    title={title}
                    imageCover={imageCover}
                    handleAddToCart={handleAddToCart}
                    handleDeleteItemWishList={handleDeleteItemWishList}
                />
            ))}
        </div>
    );
}
