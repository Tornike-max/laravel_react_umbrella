import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { ProductInterface } from "../types/types";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { Select, Spin } from "antd";

const ProductForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ProductInterface>();
    const { createProduct, isPending } = useCreateProduct();

    const onSubmit: SubmitHandler<ProductInterface> = (data) => {
        const image = data.image[0];
        const newData = {
            ...data,
            image,
        };

        console.log(newData);

        createProduct(newData);
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
                Create Product
            </h2>

            <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 mb-1">
                    Product Name
                </label>
                <input
                    id="name"
                    {...register("name", {
                        required: "Please enter a product name",
                    })}
                    className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Product Name"
                />
                {errors.name && (
                    <span className="text-red-500 text-sm">
                        {errors.name.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="description" className="text-gray-700 mb-1">
                    Description
                </label>
                <input
                    id="description"
                    {...register("description", {
                        required: "Please enter a description",
                    })}
                    className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Product Description"
                />
                {errors.description && (
                    <span className="text-red-500 text-sm">
                        {errors.description.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="price" className="text-gray-700 mb-1">
                    Price
                </label>
                <input
                    id="price"
                    type="number"
                    {...register("price", {
                        required: "Please enter a price",
                        valueAsNumber: true,
                    })}
                    className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Product Price"
                />
                {errors.price && (
                    <span className="text-red-500 text-sm">
                        {errors.price.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="categories" className="text-gray-700 mb-1">
                    Categories
                </label>
                <Controller
                    name="categories"
                    control={control}
                    rules={{
                        required: "You need to select at least one category",
                    }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            mode="multiple"
                            placeholder="Select categories"
                            style={{ width: "100%" }}
                            options={options}
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />
                {errors.categories && (
                    <span className="text-red-500 text-sm">
                        {errors.categories.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="image" className="text-gray-700 mb-1">
                    Image
                </label>
                <input
                    id="image"
                    type="file"
                    {...register("image", {
                        required: "This field is required",
                    })}
                    className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                {errors.image && (
                    <span className="text-red-500 text-sm">
                        {errors.image.message}
                    </span>
                )}
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    {isPending ? <Spin /> : "Create"}
                </button>
            </div>
        </form>
    );
};

export default ProductForm;
