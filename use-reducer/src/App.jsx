import { useReducer, useState } from "react";
import Todo from "./Todo";

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
// const ACTIONS = {
//     INCREMENT: "increment",
//     DECREMENT: "decrement",
// };

// function reducer(state, action) {
//     //  reducer will take 2 parameters.
//     //  First is the current state where are the application currently at
//     //  Second is 'action' which will be passed to 'dispatch'
//     switch (action.type) {
//         case ACTIONS.INCREMENT:
//             return { count: state.count + 1 };
//         case ACTIONS.DECREMENT:
//             return { count: state.count - 1 };
//         default:
//             return state;
//     }
// }

// function App() {
//     //                                  (function, initial state (May be just '0' but using object is a general practice))
//     const [state, dispatch] = useReducer(reducer, { count: 0 });
//     //  return 2 portion
//     //  First is tate 'state' which is the object from the argument
//     //  Second is a function called 'dispatch'

//     function increment() {
//         dispatch({ type: ACTIONS.INCREMENT });
//     }

//     function decrement() {
//         dispatch({ type: ACTIONS.DECREMENT });
//     }

//     return (
//         <>
//             <button onClick={decrement}>-</button>
//             <span>{state.count}</span>
//             <button onClick={increment}>+</button>
//         </>
//     );
// }

// export default App;

export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]; // <-- 'newTodo(action.payload.name) is equal to ** below
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
}

function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState(""); // 'name' is equal to ** above and below

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name } }); // <-- 'payload: { name }' is equal to ** above
        setName("");
    }

    console.log(todos);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
            })}
        </>
    );
}

export default App;
