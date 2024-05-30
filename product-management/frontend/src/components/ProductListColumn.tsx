import { Button } from "antd";
import { ProductType } from "../types/types";
import { useNavigate } from "react-router-dom";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

const ProductListColumn = ({ product }: { product: ProductType }) => {
    const navigate = useNavigate();
    const { deleteProduct, isPending } = useDeleteProduct();

    const categoriesArray = Array.isArray(product.categories)
        ? product.categories
        : JSON.parse(product.categories);

    return (
        <tr key={product.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-auto"
                />
            </td>
            <td className="py-2 px-4 border-b">{product.name}</td>
            <td className="py-2 px-4 border-b">${product.price}</td>
            <td className="py-2 px-4 border-b">
                {product.description.length > 30
                    ? `${product.description.slice(0, 30)}...`
                    : product.description}
            </td>
            <td className="py-2 px-4 border-b">{categoriesArray.join(", ")}</td>
            <td className="py-2 px-4 border-b flex flex-col items-center justify-center gap-1 lg:gap-2 h-full">
                <Button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full"
                >
                    See
                </Button>
                <Button
                    onClick={() => deleteProduct(product.id)}
                    className="w-full"
                    danger
                >
                    {isPending ? "deleting..." : "Delete"}
                </Button>
            </td>
        </tr>
    );
};

export default ProductListColumn;
