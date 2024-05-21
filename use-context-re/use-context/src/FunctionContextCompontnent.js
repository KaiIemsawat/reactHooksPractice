import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionContextCompontnent = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? "#322a3b" : "#e8e2ca",
        color: darkTheme ? "#e8e2ca" : "#322a3b",
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
