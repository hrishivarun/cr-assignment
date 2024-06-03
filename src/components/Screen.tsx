import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wallets from "./Wallets";
import Transactions from "./Transactions";

const Screen = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Wallets/>
        },
        {
            path: '/transactions',
            element: <Transactions/>
        }
    ]);

    return (
        <RouterProvider router={router}/>
    )
}

export default Screen;