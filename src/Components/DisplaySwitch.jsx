import React, {useState, useContext} from 'react';
import {StateContext} from '../context/StateContextProvider';
import { ThemeContext } from '../context/ThemeContextProvider';
import OutsideAlerter from './OutsideAlerter';

function DisplaySwitch() {
    const [state, setState] = useContext(StateContext);
    const [displaySwitchOpen, setDisplaySwitchOpen] = useState(false);
    const handleSelectChange = (e) => {
        const newState = {
            ...state,
            [e.target.name]: e.target.value
        };
        setState(newState);
        localStorage.setItem('state', JSON.stringify(newState));
    }

    const [isDark, setIsDark] = useContext(ThemeContext);
    const lightThemeStyle = {
        backgroundColor: '#ffff',
        color: '#373737',
        borderColor: '#e6e7eb'
    }
    const darkThemeStyle = {
        backgroundColor: '#161B22',
        color: '#ebebeb',
        borderColor: '#4a4a4a'
    }
    const appliedTheme = isDark ? darkThemeStyle : lightThemeStyle;

    return (
        <OutsideAlerter displaySwitchOpen = {displaySwitchOpen} setDisplaySwitchOpen = {setDisplaySwitchOpen}>
        <div className="display-switch-wrapper">
            <div className="display-switch" onClick={()=>setDisplaySwitchOpen(!displaySwitchOpen)} style={{...appliedTheme, boxShadow: isDark? "0 0 8px 0 #ffffff22":"0 0 8px 0 #0000001a"}}>
                <div className="switch-icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"></path></svg>
                </div>
                Display
                <div className={!displaySwitchOpen ? "dropdown-icon": "dropdown-icon rotate"}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                </div>
            </div>
            
            <section className={!displaySwitchOpen ? "dropdown-main" : "dropdown-main show"} style={{...appliedTheme, boxShadow: isDark? "0 0 8px 0 #ffffff22":"0 0 8px 0 #0000001a"}}>
                <div className="dropdown-item grouping">
                    <span>Grouping</span>
                    <select name="grouping" id="grouping" value={state.grouping} onChange={e => handleSelectChange(e)} style={appliedTheme}>
                        <option value="status">status</option>
                        <option value="user">user</option>
                        <option value="priority">priority</option>
                    </select>
                </div>

                <div className="dropdown-item ordering">
                    <span>Ordering</span>
                    <select name="ordering" id="ordering" value={state.ordering} onChange={e => handleSelectChange(e)} style={appliedTheme}>
                        <option value="priority">priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </section>
        </div>
        </OutsideAlerter>
    )
}

export default DisplaySwitch