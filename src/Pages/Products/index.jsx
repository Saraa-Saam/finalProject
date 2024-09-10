import { useEffect, useState } from "react";
import { getProductsApi } from "../../api";
import ProductItem from "../../Components/ProductItem";
import Loader from "../../Components/Common/Loader";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const getProducts = () => {
        getProductsApi()
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        getProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto p-6">
            <div className="mb-6 px-[10%]">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    filteredProducts.map(
                        ({
                            id,
                            imageCover,
                            category,
                            title,
                            price,
                            ratingsAverage,
                        }) => (
                            <ProductItem
                                id={id}
                                key={id}
                                imageCover={imageCover}
                                category={category}
                                title={title}
                                price={price}
                                ratingsAverage={ratingsAverage}
                            />
                        )
                    )
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
}
