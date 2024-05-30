import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <>
            <h1 className="text-xl font-bold">Product List</h1>
            <nav className="flex space-x-4">
                <ul className="flex items-center">
                    <Link
                        to="/admin/createProduct"
                        className={`mr-4 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700 `}
                    >
                        Admin Panel
                    </Link>
                </ul>
            </nav>
        </>
    );
};

export default MainHeader;
