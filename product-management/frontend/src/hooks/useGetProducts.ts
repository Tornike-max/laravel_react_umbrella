import { useQuery } from "@tanstack/react-query";
import { getProductsData } from "../api/api";

export const useGetProducts = (params: string[]) => {
    const { data: productsData, isPending } = useQuery({
        queryKey: ["products", `filterBy=${params.join(", ")}`],
        queryFn: () => getProductsData(params),
    });

    return { productsData, isPending };
};
