import { useEffect, useState } from "react";
import BrandCard from "../../Components/Cards/BrandCard";
import Modal from "../../Components/common/Modal";
import { getCategoriesApi } from "../../api";

export default function Brands() {
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getBrands = () => {
        getCategoriesApi()
            .then((data) => setBrands(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getBrands();
    }, []);

    const openModal = (brand) => {
        setSelectedBrand(brand);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedBrand(null);
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-green-500 text-center mb-8">All Brands</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {brands.map((brand) => (
                    <BrandCard
                        key={brand._id}
                        image={brand.image}
                        name={brand.name}
                        showBrandDetails={() => openModal(brand)}
                    />
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={selectedBrand ? selectedBrand.name : ""}
                content={
                    selectedBrand ? (
                        <div className="flex items-center">
                            <div className="w-1/2">
                                <h3 className="text-green-500 text-3xl font-semibold">
                                    {selectedBrand.name ?? "No name available."}
                                </h3>
                            </div>
                            <div className="w-1/2 pr-4">
                                <img
                                    className="w-full h-auto rounded"
                                    src={selectedBrand.image}
                                    alt={selectedBrand.name}
                                />
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )
                }
                footer={
                    <button
                        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                }
            />
        </div>
    );
}
