import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";

interface ThemeContext {
    isAuth: boolean;
}

const defaultState: ThemeContext = {
    isAuth: false,
};

export const Context = createContext<ThemeContext>(defaultState);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Context.Provider
        value={{
            isAuth: true,
        }}
    >
        <App />
    </Context.Provider>
);
