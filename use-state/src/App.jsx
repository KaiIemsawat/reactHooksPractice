import { useState } from "react";

/* In case of haveing complicate initial */
// function countInitial() {
//     return 5;
// }

function App() {
    /* Use this */
    // const [count, setCount] = useState(() => countInitial());

    const [count, setCount] = useState(0);

    function decrementCount() {
        // setCount(count - 1);
        // Above way of using is not a proper way of using 'set' for useState()
        // setCount((previousCount) => previousCount - 1);
    }
    function incrementCount() {
        setCount((previousCount) => previousCount + 1);
    }
    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span> {count} </span>
            <button onClick={incrementCount}>+</button>
        </>
    );
}

export default App;
