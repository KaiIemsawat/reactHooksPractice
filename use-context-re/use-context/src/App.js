import React, { useState } from "react";
import FunctionContextCompontnent from "./FunctionContextCompontnent";
import { ThemeProvider } from "./ThemeContext";

export const ThemeContext = React.createContext();

function App() {
    return (
        <>
            <ThemeProvider>
                <FunctionContextCompontnent />
            </ThemeProvider>
        </>
    );
}

export default App;
