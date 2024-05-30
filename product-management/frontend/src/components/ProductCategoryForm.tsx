import { SubmitHandler, useForm } from "react-hook-form";

import { useCreateCategory } from "../hooks/useCreateCategory";

type CategoryType = {
    name: string;
};
const ProductCategoryForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<CategoryType>();
    const { createCategory, isPending } = useCreateCategory();

    const onSubmit: SubmitHandler<CategoryType> = (data) => {
        console.log(data);
        createCategory(data);
    };

    const options = [
        { value: "electronics", label: "Electronics" },
        { value: "books", label: "Books" },
        { value: "home", label: "Home" },
        { value: "sports", label: "Sports" },
    ];

    return (
        <form
            className="max-w-[700px] w-full flex flex-col gap-4 p-6 bg-gray-100 rounded-lg shadow-md mx-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="text-2xl font-semibold text-gray-800">
                Create Product Category
            </h2>

            <div className="flex flex-col">
                <label htmlFor="categories" className="text-gray-700 mb-1">
                    Category Name
                </label>

                <select
                    aria-placeholder="Select categories"
                    style={{ width: "100%" }}
                    {...register("name")}
                >
                    {options.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>

                {errors.name && (
                    <span className="text-red-500 text-sm">
                        {errors.name.message}
                    </span>
                )}
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    {isPending ? "Loading..." : "Create"}
                </button>
            </div>
        </form>
    );
};

export default ProductCategoryForm;
