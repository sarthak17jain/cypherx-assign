import React, { useContext } from 'react'
import Ticket from './Ticket';
import {StateContext} from '../context/StateContextProvider';
import UserIcon from './UserIcon';
import { statusIcons, priorityIcons } from '../const/Icons';

function GroupingSectionMain({props}) {
    const [state, setState] = useContext(StateContext);
    console.log(props);
    console.log(props.groupTitle);
    console.log(props.tickets);
    return (
        <div class="status-grouping-section-main">
            <div class="container-main">
                <div class="left">
                    {state.grouping==="status" &&
                        <div class="icon-wrapper">
                            {statusIcons[props.groupTitle]}
                        </div>
                    }
                    {state.grouping==="priority" &&
                        <div class="icon-wrapper">
                            {priorityIcons[props.groupTitle]}
                        </div>
                    }
                    {state.grouping==="user" &&
                        <UserIcon/>
                    }
                    
                    <span class="status">{props.groupTitle}</span>
                    <span style={{color: "gray"}}>{props.tickets.length}</span>
                </div>
                <div class="right">
                    <div class="icon-wrapper">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            class="icon"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{color: "gray"}}
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                    </div>
                    <div class="icon-wrapper">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            class="icon"
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

            <div class="ticket-container">
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