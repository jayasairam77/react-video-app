import React from "react"

const ThemeContext = React.createContext({
    darkTheme: false,
    toggleDarkTheme: () => {},
})

export default ThemeContext