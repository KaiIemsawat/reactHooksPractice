import { useState, useEffect, useRef } from "react";
import { PokemonList } from "./PokemonList";
import axios from "axios";
import { Pagination } from "./Pagination";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon"
    );
    const [nextPageUrl, setNextPageUrl] = useState();
    const [previousPageUrl, setPreviousPageUrl] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // Track component's mounted state
    const isMounted = useRef(true);

    useEffect(() => {
        setIsLoading(true);
        let cancel;
        axios
            .get(currentPageUrl, {
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            })
            .then((res) => {
                setIsLoading(false);
                setNextPageUrl(res.data.next);
                setPreviousPageUrl(res.data.previous);
                setPokemon(res.data.results.map((poke) => poke.name));
            })
            .catch((error) => {
                console.log(error);
            });

        return () => {
            // Set the component's mounted state to false when it unmounts
            isMounted.current = false;
            cancel();
        };
    }, [currentPageUrl]);

    function goToNextPage() {
        setCurrentPageUrl(nextPageUrl);
    }

    function goToPreviousPage() {
        setCurrentPageUrl(previousPageUrl);
    }

    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <PokemonList pokemon={pokemon} />
            <Pagination
                goToNextPage={nextPageUrl ? goToNextPage : null}
                goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
            />
        </>
    );
}

export default App;
