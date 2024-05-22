import { useReducer, useState } from "react";

const ACTIONS = {
    ADD_TODO: "add-todo",
};

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
    }
};

const newTodo = (name) => {
    return { id: Date.now(), name, complete: false };
};

function App() {
    const [name, setName] = useState("");
    const [todos, dispatch] = useReducer(reducer, []);
    // Note : 'dispatch' will call 'action' from reducer

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
        setName("");
    };

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
        </>
    );
}

export default App;
