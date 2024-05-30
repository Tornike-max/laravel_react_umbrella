import { Button } from "antd";
import { GoSidebarCollapse } from "react-icons/go";
import { useToggleSidebar } from "../context/useToggleSidebar";
import { useNavigate } from "react-router-dom";

const AdminPanelHeader = () => {
    const { toggleSidebar, isOpen } = useToggleSidebar();
    const navigate = useNavigate();
    return (
        <div className="w-full flex justify-between items-center px-8">
            <Button
                className="left-0 top-0 px-3 py-2 flex justify-center items-center"
                onClick={toggleSidebar}
            >
                {!isOpen && (
                    <p className="flex items-center gap-2">
                        <span className="text-2xl">
                            <GoSidebarCollapse />
                        </span>
                        <span className="font-semibold">Open Sidebar</span>
                    </p>
                )}
            </Button>
            <Button
                onClick={() => navigate("/")}
                className="left-0 top-0 px-3 py-2 flex justify-center items-center"
            >
                Dashboard
            </Button>
        </div>
    );
};

export default AdminPanelHeader;
