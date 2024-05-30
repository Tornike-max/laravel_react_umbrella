import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductApi } from "../api/api";
import toast from "react-hot-toast";

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    const { mutate: deleteProduct, isPending } = useMutation({
        mutationFn: (id: string | number) => deleteProductApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            toast.success("Product deleted Successfully");
        },
        onError: () => {
            throw new Error("Error while deleting product");
        },
    });
    return { deleteProduct, isPending };
};
