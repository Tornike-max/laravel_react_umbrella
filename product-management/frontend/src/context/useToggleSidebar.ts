import { useContext } from "react";
import { SidebarProvider } from "./SidebarContext";

export const useToggleSidebar = () => {
    const context = useContext(SidebarProvider);
    if (!context) {
        throw new Error(
            "useToggleSidebar must be used within a SidebarContext"
        );
    }
    return context;
};
