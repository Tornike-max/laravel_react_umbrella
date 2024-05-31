import { useGetProducts } from "../hooks/useGetProducts";
import { ProductType } from "../types/types";
import ProductListColumn from "../components/ProductListColumn";
import ProductFilter from "../components/ProductFilter";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
    const [searchParams] = useSearchParams();
    const categories = searchParams.getAll("categories");
    const { productsData, isPending } = useGetProducts(categories);

    if (isPending)
        return <p className="text-center text-gray-500">Loading...</p>;

    console.log(productsData);
    return (
        <div className="overflow-x-auto">
            <ProductFilter />
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Image</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Categories</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productsData ? (
                        productsData.data.map((product: ProductType) => (
                            <ProductListColumn
                                key={product.id}
                                product={product}
                            />
                        ))
                    ) : (
                        <p className="w-full text-center text-red-500 text-lg">
                            No Data!
                        </p>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
