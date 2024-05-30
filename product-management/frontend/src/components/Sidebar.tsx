import { Space, Button, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useToggleSidebar } from "../context/useToggleSidebar";
import { GoSidebarExpand } from "react-icons/go";

const Sidebar = () => {
    const { isOpen, toggleSidebar } = useToggleSidebar();
    const { pathname } = useLocation();

    const navigationItems = [
        { name: "Dashboard", path: "/" },
        { name: "Create Product", path: "/admin/createProduct" },
        { name: "Create Category", path: "/admin/createCategory" },
    ];

    return (
        <>
            <Drawer
                placement="left"
                width={300}
                onClose={toggleSidebar}
                open={isOpen}
                extra={
                    <Space>
                        <Button
                            className="flex items-center gap-2"
                            onClick={toggleSidebar}
                        >
                            <span className="text-base md:text-xl">Close</span>
                            <span className="text-base md:text-xl">
                                <GoSidebarExpand />
                            </span>
                        </Button>
                    </Space>
                }
            >
                <ul className="flex flex-col justify-center items-start gap-4 md:gap-6">
                    {navigationItems.map((item) => (
                        <li
                            className="list-none text-lg md:text-xl"
                            key={item.name}
                        >
                            <Link
                                to={item.path}
                                className={`px-4 py-2 rounded-md hover:bg-gray-700 ${
                                    pathname === item.path
                                        ? "bg-gray-700 font-bold text-slate-100"
                                        : ""
                                }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Drawer>
        </>
    );
};

export default Sidebar;
