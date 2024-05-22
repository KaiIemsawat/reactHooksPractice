import { useReducer } from "react";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};

const reducer = (state, action) => {
    // 'state' -> current state where the application is currently at
    // 'action' -> will be passed to 'dispatch'
    // 'reducer' will return the new updated state
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    // Note : 'dispatch' will call 'action' from reducer

    const increment = () => {
        dispatch({ type: ACTIONS.INCREMENT });
    };

    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT });
    };
    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </>
    );
}

export default App;
