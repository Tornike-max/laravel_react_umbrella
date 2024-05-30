import { useQuery } from "@tanstack/react-query";
import { getProductData } from "../api/api";

export const useGetProduct = (id: string | number) => {
    const { data: product, isPending } = useQuery({
        queryKey: ["products", `productId=${id}`],
        queryFn: () => getProductData(id || ""),
    });
    return { product, isPending };
};
