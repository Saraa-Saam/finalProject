import { useEffect, useState } from "react";
import CartCard from "../../Components/Cards/CartCard";
import {
    clearCartApi,
    deleteItemCartApi,
    getCartApi,
    updateItemCartApi,
} from "../../api";
import {Link} from 'react-router-dom'

const initialCart = {
    products: [],
    numOfCartItems: 0,
    totalCartPrice: 0,
};

export default function Cart() {
    const [cart, setCart] = useState(initialCart);
    // const [numOfCartItems, setNumOfCartItems] = useState(0)

    const getCart = () => {
        getCartApi()
            .then((data) =>
           {console.log(data)
                setCart({
                    products: data.data.products,
                    numOfCartItems: data.numOfCartItems,
                    totalCartPrice: data.data.totalCartPrice,
                })
    })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getCart();
    }, []);

    const handleClearCart = () => {
        clearCartApi();
        setCart(initialCart);
    };

    const handleDeleteItemCart = async (id) => {
        await deleteItemCartApi(id);
        getCart();
    };
    const handleUpdateItemCart = async (id, value) => {
        await updateItemCartApi(id, value);
        getCart();
    };

//     async function getCartItems(){
//     let { data}=    await getCart()
// setNumOfCartItems(data.data.numOfCartItems) 
// }
//     useEffect (()=>{getCartItems()},[])
    return (
        <div className="container mx-auto py-5 my-12 sm:my-20 px-5 bg-gray-100 rounded-lg">
            <div className="flex justify-between mb-4">
                <h2>Cart Shop</h2>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg">
                    <Link
                        href="/Ecommerce/check-out/66decc0411754f394f2e36f6"
                        className="text-white no-underline"
                    >
                        Check Out
                    </Link>
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h5>
                    Total Price:{" "}
                    <span className="text-green-500">
                        {cart.totalCartPrice}
                    </span>
                </h5>
                <h5>
                    Total Number of Items:{" "}
                    <span className="text-green-500">
                        {cart.numOfCartItems}
                    </span>
                </h5>
            </div>

            {cart.products.map(({ _id, product, count, price }) => (
                <CartCard
                    key={_id}
                    count={count}
                    price={price}
                    product={product}
                    handleDeleteItemCart={handleDeleteItemCart}
                    handleUpdateItemCart={handleUpdateItemCart}
                />
            ))}

            <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg mx-auto block"
                onClick={handleClearCart}
            >
                Clear Your Cart
            </button>
        </div>
    );
}
