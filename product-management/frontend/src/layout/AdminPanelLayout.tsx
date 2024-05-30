import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AdminPanelHeader from "../components/AdminPanelHeader";
import { useToggleSidebar } from "../context/useToggleSidebar";

const AdminPanelLayout = () => {
    const { isOpen } = useToggleSidebar();
    return (
        <div className="h-screen flex flex-col">
            <header className="bg-gray-800 text-white h-16 flex justify-start items-center ">
                <AdminPanelHeader />
            </header>
            <div className="flex-1 flex">
                {isOpen && <Sidebar />}
                <div className="max-w-[2200px] w-full flex justify-center items-center flex-col">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminPanelLayout;
