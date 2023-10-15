import { useState } from "react";
import ToggleComponent from "./useToggle/ToggleComponent";
import TimeoutComponent from "./useTimeout/TimeoutComponent";
import DebounceComponent from "./useDebounce/DebounceComponent";

function App() {
    // return <ToggleComponent />;
    // return <TimeoutComponent />;
    return <DebounceComponent />;
}

export default App;
