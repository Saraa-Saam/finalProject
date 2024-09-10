import { createBrowserRouter } from "react-router-dom";

// Pages
import MainLayout from "../Pages/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import ProtectedRoute from "../Pages/ProtectedRoute";
import ProductDetails from "../Pages/ProductDetails";
import Brands from "../Pages/Brands";
import Categories from "../Pages/Categories";
import WishList from "../Pages/WishList";
import Products from "../Pages/Products";
import VerifyCode from "../Pages/VerifyCode";
import ForgetPassword from "../Pages/ForgetPassword";
import ResetPassword from "../Pages/ResetPassword";

const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
            },
            {
                path: "cart",
                element: (
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                ),
            },

            {
                path: "brands",
                element: (
                    <ProtectedRoute>
                        <Brands />
                    </ProtectedRoute>
                ),
            },

            {
                path: "products",
                element: (
                    <ProtectedRoute>
                        <Products />
                    </ProtectedRoute>
                ),
            },

            {
                path: "categories",
                element: (
                    <ProtectedRoute>
                        <Categories />
                    </ProtectedRoute>
                ),
            },

            {
                path: "wishlist",
                element: (
                    <ProtectedRoute>
                        <WishList />
                    </ProtectedRoute>
                ),
            },

            {
                path: "product-details/:id",
                element: (
                    <ProtectedRoute>
                        <ProductDetails />
                    </ProtectedRoute>
                ),
            },
            {
                path: "reset-password",
                element: <ResetPassword />,
            },
            {
                path: "forget-password",
                element: <ForgetPassword />,
            },
            {
                path: "verify-code",
                element: <VerifyCode />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
