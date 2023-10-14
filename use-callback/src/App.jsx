import React, { useCallback, useState } from "react";
import List from "./List";

function App() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(
        // having argument such as 'incrementor' (and in App.jsx) is something that can't be done in useMemo
        (incrementor) => {
            return [
                number + incrementor,
                number + 1 + incrementor,
                number + 2 + incrementor,
            ];
        },
        [number]
    );

    const theme = {
        backgroundColor: dark ? "#300222" : "#fae8fa",
        color: dark ? "#fae8fa" : "#300222",
    };

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Toggle Theme
            </button>
            <List getItems={getItems} />
        </div>
    );
}

export default App;

/* useCallback VS useMemo */
/* 
    USE CALLBACK -> Take the function and return the function
    - recreate function whrn [number] change

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);
*/
/* 
    USE MEMO -- Take the function and return the return value of the function

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);
*/
