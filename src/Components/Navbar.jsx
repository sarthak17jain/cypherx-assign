import React, { useContext, useEffect } from 'react';
import DisplaySwitch from './DisplaySwitch';
import ThemeToggle from './ThemeToggle';
import {ThemeContext} from '../context/ThemeContextProvider';

function Navbar() {
    const [isDark, setIsDark] = useContext(ThemeContext);
    const lightThemeStyle = {
        backgroundColor: '#ffff',
        color: '#373737'
    }
    const darkThemeStyle = {
        backgroundColor: '#161B22',
        color: '#ebebeb'
    }
    const appliedTheme = isDark ? darkThemeStyle : lightThemeStyle;

    return (
        <section className="navbar-main" style={appliedTheme}>
            <nav>
                <DisplaySwitch/>
                <ThemeToggle/>
            </nav>
        </section>
    )
}

export default Navbar