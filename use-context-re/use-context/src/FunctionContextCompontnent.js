import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionContextCompontnent = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? "#312136" : "#f8eee2",
        color: darkTheme ? "#f8eee2" : "#312136",
        padding: "2rem",
        margin: "2rem",
    };
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>FunctionContextCompontnent</div>
        </>
    );
};
export default FunctionContextCompontnent;
