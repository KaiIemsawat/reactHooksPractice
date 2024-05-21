import { useEffect, useRef, useState } from "react";

function App() {
    const [name, setName] = useState("");

    const inputRef = useRef();

    function focus() {
        inputRef.current.focus();
    }

    return (
        <>
            <input
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div>My name is {name}</div>
            <button onClick={focus}>Focus</button>
        </>
    );
}

export default App;
