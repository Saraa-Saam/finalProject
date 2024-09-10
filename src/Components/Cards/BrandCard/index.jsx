export default function BrandCard({ image, name, showBrandDetails }) {
    return (
        <div className="col-span-1">
            <div
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                onClick={showBrandDetails}
            >
                <div className="card-img">
                    <img
                        className="w-full h-32 object-cover"
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="card-body p-4">
                    <p className="text-center text-lg font-semibold">{name}</p>
                </div>
            </div>
        </div>
    );
}
