import { useState } from "react";
import useDebounce from "./useDebounce";

import React from "react";

export default function DebounceComponent() {
    const [count, setCount] = useState(10);
    useDebounce(
        // the custom hook (useDebounce) take 3 arguments
        () => alert(count), // callback function
        1000, // delay time
        [count] // dependencies
    );
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        </div>
    );
}
