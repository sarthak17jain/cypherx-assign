import React, { useContext } from 'react'
import Ticket from './Ticket';
import {StateContext} from '../context/StateContextProvider';
import UserIcon from './UserIcon';
import { statusIcons, priorityIcons } from '../const/Icons';
import { ThemeContext } from '../context/ThemeContextProvider';

function GroupingSectionMain({props}) {
    const [state, setState] = useContext(StateContext);
    console.log("In grouping section main", props);
    console.log(props.groupTitle);
    console.log(props.tickets);
    
    const [isDark, setIsDark] = useContext(ThemeContext);
    const lightThemeStyle = {
        color: '#373737'
    }
    const darkThemeStyle = {
        color: '#ebebeb'
    }
    const appliedTheme = isDark ? darkThemeStyle : lightThemeStyle;

    return (
        <div className="status-grouping-section-main">
            <div className="container-main">
                <div className="left">
                    {state.grouping==="status" &&
                        <div className="icon-wrapper">
                            {statusIcons[props.groupTitle]}
                        </div>
                    }
                    {state.grouping==="priority" &&
                        <div className="icon-wrapper">
                            {priorityIcons[props.groupTitle]}
                        </div>
                    }
                    {state.grouping==="user" &&
                        <UserIcon pname={props.groupTitle}/>
                    }
                    
                    <span className="status" style={appliedTheme}>{props.groupTitle}</span>
                    <span style={{color: "gray"}}>{props.tickets.length}</span>
                </div>
                <div className="right">
                    <div className="icon-wrapper">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="icon"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{color: "gray"}}
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                    </div>
                    <div className="icon-wrapper">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            className="icon"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{color: "gray"}}
                        >
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="ticket-container">
                {
                    props.tickets.map(ticket => (
                        <Ticket ticketType={state.grouping} details={ticket}/>
                    ))
                }
            </div>
        </div>
    )
}

export default GroupingSectionMain