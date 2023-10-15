import { useEffect } from "react";
import useTimeout from "../useTimeout/useTimeout";

export default function useDebounce(callback, delay, dependencies) {
    // Destructure 'reset' and 'clear' from useTimeout (another custom hook) that take 2 arguments (callback function and delay)
    const { reset, clear } = useTimeout(callback, delay);
    useEffect(reset, [...dependencies, reset]);
    useEffect(clear, []); // To have no alert when first launch
}
