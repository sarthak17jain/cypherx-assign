import React from 'react'

function Ticket() {
    return (
        <div class="ticket-main">
            <div class="top-line">
                <span>CAM-10</span>
                <div
                    class="user-icon"
                    style={{backgroundColor: "rgb(144, 12, 63)"}}
                >
                    <div>R</div>
                    <div
                        class="available-icon"
                        style={{backgroundColor: "rgb(236, 194, 56)"}}
                    ></div>
                </div>
            </div>
            <div class="middle-line">
                <p>Conduct Security Vulnerability Assessment</p>
            </div>
            <div class="bottom-line">
                <div class="icon-wrapper">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{color: "gray"}}
                    >
                        <path d="M2 20h.01"></path>
                        <path d="M7 20v-4"></path>
                    </svg>
                </div>
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