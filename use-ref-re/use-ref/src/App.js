import { useEffect, useRef, useState } from "react";

function App() {
    const [name, setName] = useState("");

    const prevName = useRef("");

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <div>
                My name is <h3>{name}</h3> and it used to be{" "}
                <h3>{prevName.current}</h3>
            </div>
        </>
    );
}

export default App;
