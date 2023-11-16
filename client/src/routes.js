import Auth from "./pages/Auth";
import Cards from "./pages/Cards";
import Expenses from "./pages/Expenses";
import Incomes from "./pages/Incomes";
import Wallet from "./pages/Wallet";
import {EXPENSES_ROUTER, INCOMES_ROUTER, LOGIN_ROUTER, REGISTR_ROUTER, WALLET_ROUTER,CARDS_ROUTER } from "./utils/consts";

export const authRoutes = [
    {
        path:CARDS_ROUTER,
        Component:Cards,
    },
    {
        path:WALLET_ROUTER,
        Component:Wallet,
    },
    {
        path:INCOMES_ROUTER,
        Component:Incomes,
    },
    {
        path:EXPENSES_ROUTER,
        Component:Expenses,
    }
]

export const publicRoutes = [
    {
        path:LOGIN_ROUTER,
        Component:Auth,
    },
    {
        path:REGISTR_ROUTER,
        Component:Auth,
    }
]