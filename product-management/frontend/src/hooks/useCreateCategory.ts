import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategoryApi } from "../api/api";
import toast from "react-hot-toast";
import { CategoryType } from "../types/types";

export const useCreateCategory = () => {
    const queryClient = useQueryClient();

    const { mutate: createCategory, isPending } = useMutation({
        mutationFn: (data: CategoryType) => createCategoryApi(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] });
            toast.success("Category created successfylly");
        },
        onError: () => {
            toast.error("Error while creating category");
        },
    });

    return { createCategory, isPending };
};
