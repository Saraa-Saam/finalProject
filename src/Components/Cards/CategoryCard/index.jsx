const CategoryCard = ({ image, name }) => (
    <div className="col-span-1">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
                <img
                    className="w-full h-72 object-cover"
                    src={image}
                    alt={name}
                />
            </div>
            <div className="p-4">
                <p className="text-green-500 text-2xl font-semibold text-center">
                    {name}
                </p>
            </div>
        </div>
    </div>
);

export default CategoryCard;
