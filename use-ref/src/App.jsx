import { useState, useRef, useEffect } from "react";

function App() {
    const [name, setName] = useState("");
    const prevName = useRef("");

    useEffect(() => {
        prevName.current = name;
        // prevName which is useRef("") is an object that would have only 'current' proerty
        // In this case -> {current : ""} since it was assign empty string in -> const prevName = useRef("");
        console.log(prevName);
    }, [name]);

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <div>
                My name is {name} and it used to be {prevName.current}
            </div>
        </>
    );
}

export default App;
