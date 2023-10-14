import React, { useState, useEffect } from "react";

function App() {
    // Casse Study # 1
    // const [resourceType, setResourceType] = useState("posts");
    // const [items, setItems] = useState([]);

    // Casse Study # 1
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //         .then((response) => response.json())
    //         .then((json) => setItems(json));
    // }, [resourceType]);

    // Casse Study # 2
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {/* Case Study # 1 */}
            {/* <div>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>
                    Comments
                </button>
            </div>
            <h1>{resourceType}</h1>
            {items.map((item) => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>;
            })} */}
            <div>{windowWidth}</div>
        </>
    );
}

export default App;
