import React from 'react';
import UserIcon from './UserIcon';
import { statusIcons, priorityIcons } from '../const/Icons';

function Ticket({ticketType, details}) {
    
    return (
        <div class="ticket-main">
            <div class="top-line">
                <span>{details.id}</span>
                {ticketType==="user" && <UserIcon/>}
            </div>
            <div class="middle-line">
                {ticketType==="status" || statusIcons[details.status]}
                <p>{details.title}</p>
            </div>
            <div class="bottom-line">
                {ticketType==="priority" || 
                    <div class="icon-wrapper">
                        {priorityIcons[details.priority]}
                    </div>
                }

                <div class="tag-wrapper">
                    <div class="tag">
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 256 256"
                                class="icon"
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