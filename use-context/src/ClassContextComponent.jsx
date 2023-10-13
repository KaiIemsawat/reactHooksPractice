import React from "react";
import { Component } from "react";
import { ThemeContext } from "./App";

export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? "#20043f" : "#fdf3ff",
            color: dark ? "#fdf3ff" : "#20043f",
            padding: "2rem",
            margin: "2rem",
        };
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {(darkTheme) => {
                    return (
                        <div style={this.themeStyles(darkTheme)}>
                            Class Theme
                        </div>
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}
