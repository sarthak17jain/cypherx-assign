import React, {useContext, useEffect, useState} from 'react';
import UserIcon from './UserIcon';
import { ThemeContext } from '../context/ThemeContextProvider';
import { DataContext } from "../context/DataContextProvider";
import { statusIcons, priorityIcons } from '../const/Icons';

function Ticket({ticketType, details}) {
    const [isDark, setIsDark] = useContext(ThemeContext);
    const [data, setData] = useContext(DataContext);
    const lightThemeStyle = {
        backgroundColor: '#ffff',
        color: '#373737',
        borderColor: '#e6e7eb',
    }
    const darkThemeStyle = {
        backgroundColor: '#161B22',
        color: '#ebebeb',
        borderColor: '#4a4a4a'
    }
    const appliedTheme = isDark ? darkThemeStyle : lightThemeStyle;

    return (
        <div className="ticket-main" style={appliedTheme}>
            <div className="top-line">
                <span>{details.id}</span>
                {ticketType==="user" || <UserIcon pname={localStorage.getItem('userIdMapping') ? JSON.parse(localStorage.getItem('userIdMapping'))[details.userId]: "JS"}/>}
            </div>
            <div className="middle-line">
                <div>
                {ticketType==="status" || statusIcons[details.status]}
                </div>
                <p style={appliedTheme}>{details.title}</p>
            </div>
            <div className="bottom-line">
                {ticketType==="priority" || 
                        priorityIcons[details.priority]
                }

                <div className="tag-wrapper">
                    <div className="tag" style={appliedTheme}>
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 256 256"
                                className="icon"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{color: "gray"}}
                            >
                                <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
                            </svg>
                        </div>
                        <span>Feature Request</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket