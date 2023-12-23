import { createContext, useState, useEffect } from 'react';
export const ThemeContext = createContext(null);

const ThemeContextProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const localIsDark = localStorage.getItem('isDark');
        setIsDark(!!localIsDark ? localIsDark === 'true' : false);
    }, []);

    return (
        <ThemeContext.Provider value={[isDark, setIsDark]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;