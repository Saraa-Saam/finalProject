import { useEffect, useState } from "react";
import CategoryCard from "../../Components/Cards/CategoryCard";
import { getCategoriesApi } from "../../api";

export default function Brands() {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getCategoriesApi()
            .then((data) => setCategories(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category._id}
                            image={category.image}
                            name={category.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
