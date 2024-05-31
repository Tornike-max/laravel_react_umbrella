/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { CategoryType, ProductInterfaceObj } from "../types/types";

export const createProductApi = async (newData: ProductInterfaceObj) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API}/products`,
            newData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        if (response.status !== 201) {
            throw new Error("Something went wrong");
        }

        return response.data;
    } catch (error) {
        throw new Error("Something went wrong");
    }
};

export const createCategoryApi = async (data: CategoryType) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API}/product-categories`,
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        if (response.status !== 201) {
            throw new Error("Something went wrong");
        }

        return response.data;
    } catch (error) {
        throw new Error("Something went wrong");
    }
};

export const getProductsData = async (categories: any) => {
    try {
        const params =
            categories.length > 0 ? { categories: categories.join(",") } : {};
        const response = await axios.get(
            `${import.meta.env.VITE_API}/products`,
            { params }
        );
        if (response.status !== 200) {
            throw new Error("Something went wrong");
        }

        return response.data;
    } catch (error) {
        throw new Error("Something went wrong");
    }
};

export const deleteProductApi = async (id: string | number) => {
    try {
        await axios.delete(`${import.meta.env.VITE_API}/products/${id}`);
    } catch (error) {
        throw new Error("Something went wrong");
    }
};

export const getProductData = async (id: string | number) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API}/products/${id}`
        );
        if (response.status !== 200) {
            throw new Error("Something went wrong");
        }

        return response.data;
    } catch (error) {
        throw new Error("Something went wrong");
    }
};
