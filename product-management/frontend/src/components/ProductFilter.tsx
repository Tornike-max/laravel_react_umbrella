import { Select } from "antd";
import { useSearchParams } from "react-router-dom";

const ProductFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleCategoryChange = (selectedCategories: string[]) => {
        if (selectedCategories.length > 0) {
            searchParams.set("categories", selectedCategories.join(","));
        } else {
            searchParams.delete("categories");
        }
        setSearchParams(searchParams);
    };

    const categories = searchParams.get("categories")?.split(",") || [];

    return (
        <div className="w-full flex justify-center items-center mb-4">
            <Select
                mode="multiple"
                placeholder="Filter by categories"
                onChange={handleCategoryChange}
                value={categories}
                style={{ width: "50%" }}
            >
                <Select.Option value="electronics">Electronics</Select.Option>
                <Select.Option value="books">Books</Select.Option>
                <Select.Option value="home">Home</Select.Option>
                <Select.Option value="sports">Sports</Select.Option>
            </Select>
        </div>
    );
};

export default ProductFilter;
