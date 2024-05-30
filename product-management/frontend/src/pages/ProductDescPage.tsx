import { useNavigate, useParams } from "react-router-dom";
import { Button, Spin } from "antd";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useGetProduct } from "../hooks/useGetProduct";

const ProductDescPage = () => {
    const { id } = useParams();
    const { product, isPending } = useGetProduct(id || "");
    const navigate = useNavigate();

    if (isPending) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    if (!product) {
        return <div className="text-center p-4">Product not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-5">
            <div className="w-full flex justify-start items-center px-6">
                <Button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2"
                >
                    <HiOutlineArrowLeft />
                    <span>Go Back</span>
                </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="text-lg font-semibold mb-3">
                    Price:{" "}
                    <span className="text-xl text-blue-500">
                        ${product.price}
                    </span>
                </div>
                <div className="text-gray-700">
                    <span className="font-semibold">Categories:</span>
                    <ul className="list-disc list-inside ml-4">
                        {product.categories &&
                            product.categories.map(
                                (category: string, index: number) => (
                                    <li key={index}>{category}</li>
                                )
                            )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDescPage;
