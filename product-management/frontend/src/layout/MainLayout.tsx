import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const MainLayout = () => {
    return (
        <div className="h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4 flex justify-between">
                <MainHeader />
            </header>
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <footer className="bg-gray-200 text-gray-600 p-4">
                {/* Your footer content */}
            </footer>
        </div>
    );
};

export default MainLayout;
