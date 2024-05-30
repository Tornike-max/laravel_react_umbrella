import React, { createContext, useState } from "react";

const defaultValues = {
    isOpen: false,
    setIsOpen: () => {},
    toggleSidebar: () => {},
};

type SideBarTypes = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleSidebar: () => void;
};

export const SidebarProvider = createContext<SideBarTypes | null>(
    defaultValues
);

export const SidebarContext = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsOpen((prevOpen) => !prevOpen);
    };

    const values: SideBarTypes = {
        isOpen,
        setIsOpen,
        toggleSidebar,
    };

    return (
        <SidebarProvider.Provider value={values}>
            {children}
        </SidebarProvider.Provider>
    );
};
