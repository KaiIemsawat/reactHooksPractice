import { useEffect, useRef, useState } from "react";

function App() {
    const [name, setName] = useState("");
    const renderCount = useRef(0);
    // return as {current: 0}

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I render {renderCount.current} itmes</div>
        </>
    );
}

export default App;
