import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import CoinPage from "../pages/CoinPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: "coinpage",
                        element: <CoinPage />,
                    },
                ],
            },
        ],
    },
]);
