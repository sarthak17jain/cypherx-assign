import React from 'react'

function UserIcon({pname}) {
    function getFirstLetters(str) {
        const firstLetters = str.split(' ').map(word => word.charAt(0)).join('');
      
        return firstLetters;
      }
    return (
        <div class="user-icon" style={{backgroundColor: "rgb(144, 12, 63)"}}>
            <div>{pname.split(' ').map(word => word.charAt(0)).join('')}</div>
            <div
                class="available-icon"
                style={{backgroundColor: "rgb(236, 194, 56)"}}
            ></div>
        </div>
    )
}

export default UserIcon