import { useQuery } from "@tanstack/react-query";
import { getProductsData } from "../api/api";

export const useGetProducts = (categories) => {
    const { data: productsData, isPending } = useQuery({
        queryKey: ["products", `filterBy=${categories}`],
        queryFn: () => getProductsData(categories),
    });

    return { productsData, isPending };
};
