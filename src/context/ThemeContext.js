import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const STORAGE_KEY = "portfolio-theme";

const getInitialTheme = () => {
	if (typeof window === "undefined") return "dark";

	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === "light" || stored === "dark") return stored;

	// Fall back to system preference on first visit
	const prefersLight =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: light)").matches;

	return prefersLight ? "light" : "dark";
};

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		document.body.setAttribute("data-theme", theme);
		window.localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
