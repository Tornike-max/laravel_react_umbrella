import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { SidebarContext } from "./context/SidebarContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SidebarContext>
            <QueryClientProvider client={queryClient}>
                <Toaster />
                <ReactQueryDevtools initialIsOpen={false} />
                <App />
            </QueryClientProvider>
        </SidebarContext>
    </React.StrictMode>
);
