import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductApi } from "../api/api";
import { ProductInterfaceObj } from "../types/types";
import toast from "react-hot-toast";

export const useCreateProduct = () => {
    const queryClient = useQueryClient();
    const { mutate: createProduct, isPending } = useMutation({
        mutationFn: (newData: ProductInterfaceObj) => createProductApi(newData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            toast.success("Product Created Successfully");
        },
        onError: () => {
            throw new Error("Error while creating product");
        },
    });
    return { createProduct, isPending };
};
