import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanelLayout from "./layout/AdminPanelLayout";
import MainLayout from "./layout/MainLayout";
import ProductCategoryForm from "./components/ProductCategoryForm";
import ProductForm from "./components/ProductForm";
import ProductList from "./pages/ProductList";
import ProductDescPage from "./pages/ProductDescPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AdminPanelLayout />}>
                    <Route
                        path="/admin/createProduct"
                        element={<ProductForm />}
                    />
                    <Route
                        path="/admin/createCategory"
                        element={<ProductCategoryForm />}
                    />
                </Route>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDescPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
