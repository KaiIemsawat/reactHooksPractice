import React from "react";

import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <FunctionContextComponent />
            {/* <ClassContextComponent /> */}
        </ThemeProvider>
    );
}

export default App;
