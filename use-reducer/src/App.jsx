import { useReducer, useState } from "react";

/* Original Code with 'useState'*/
// function App() {
//     const [count, setCount] = useState(0);

//     function increment() {
//         setCount((prevCount) => prevCount + 1);
//     }

//     function decrement() {
//         setCount((prevCount) => prevCount - 1);
//     }

//     return (
//         <>
//             <button onClick={decrement}>-</button>
//             <span>{count}</span>
//             <button onClick={increment}>+</button>
//         </>
//     );
// }
// export default App;

/* With useReducer */
const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};

function reducer(state, action) {
    //  reducer will take 2 parameters.
    //  First is the current state where are the application currently at
    //  Second is 'action' which will be passed to 'dispatch'
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function App() {
    //                                  (function, initial state (May be just '0' but using object is a general practice))
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    //  return 2 portion
    //  First is tate 'state' which is the object from the argument
    //  Second is a function called 'dispatch'

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT });
    }

    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT });
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </>
    );
}

export default App;
