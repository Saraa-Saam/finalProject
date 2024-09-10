import { deleteItemCartApi, updateItemCartApi } from "../../../api";

export default function CartCard({
    product,
    count,
    price,
    handleDeleteItemCart,
    handleUpdateItemCart,
}) {
    const { imageCover, title, id } = product;

    return (
        <div className="flex flex-col md:flex-row border-b my-3 items-center p-2 md:gap-4">
            <div className="w-full md:w-1/5">
                <img alt="" className="w-full" src={imageCover} />
            </div>

            <div className="w-full md:w-4/5 flex md:flex-row justify-between items-center mt-4 md:mt-0">
                <div>
                    <h5 className="text-lg font-semibold">{title}</h5>
                    <h6 className="text-md font-medium">{price} EGP</h6>
                    <button
                        className="text-red-500 text-sm flex items-center mt-2 cursor-pointer"
                        onClick={() => handleDeleteItemCart(id)}
                    >
                        <i className="fa fa-trash mr-1"></i> Remove
                    </button>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <button
                        className="bg-gray-200 px-3 py-1 rounded-md cursor-pointer"
                        onClick={() => handleUpdateItemCart(id, count + 1)}
                    >
                        +
                    </button>
                    <span className="mx-3 text-lg">{count}</span>
                    <button
                        className="bg-gray-200 px-3 py-1 rounded-md cursor-pointer"
                        onClick={() => handleUpdateItemCart(id, count - 1)}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}
