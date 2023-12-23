import React, { useContext } from 'react'
import TicketContainer from './TicketContainer'
import StateContext from '../context/StateContextProvider'

function GroupingSectionMain({props}) {
    console.log(props);
    console.log(props.groupTitle);
    console.log(props.tickets);
    return (
        <div class="status-grouping-section-main">
            <div class="container-main">
                <div class="left">
                    <div class="icon-wrapper">
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                class="icon"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{color: "gray"}}
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M7.5 4.21l0 .01"></path>
                                <path d="M4.21 7.5l0 .01"></path>
                                <path d="M3 12l0 .01"></path>
                                <path d="M4.21 16.5l0 .01"></path>
                                <path d="M7.5 19.79l0 .01"></path>
                                <path d="M12 21l0 .01"></path>
                                <path d="M16.5 19.79l0 .01"></path>
                                <path d="M19.79 16.5l0 .01"></path>
                                <path d="M21 12l0 .01"></path>
                                <path d="M19.79 7.5l0 .01"></path>
                                <path d="M16.5 4.21l0 .01"></path>
                                <path d="M12 3l0 .01"></path>
                            </svg>
                        </div>
                    </div>
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
            {
                props.tickets.map(ticket => (
                    <TicketContainer />
                ))
            }
        </div>
    )
}

export default GroupingSectionMain