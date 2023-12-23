import React from 'react'

function UserIcon({pname}) {
    const hRange = [0, 360];
    const sRange = [50, 75];
    const lRange = [25, 60];
    const getHashOfString = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        hash = Math.abs(hash);
        return hash;
    };
    const normalizeHash = (hash, min, max) => {
        return Math.floor((hash % (max - min)) + min);
    };

    const generateHSL = (name) => {
        const hash = getHashOfString(name);
        const h = normalizeHash(hash, hRange[0], hRange[1]);
        const s = normalizeHash(hash, sRange[0], sRange[1]);
        const l = normalizeHash(hash, lRange[0], lRange[1]);
        return `hsl(${h}, ${s}%, ${l}%)`;
    };

    return (
        <div className="user-icon" style={{backgroundColor: generateHSL(pname)}}>
            <div>{pname.split(' ').map(word => word.charAt(0).toUpperCase()).join('')}</div>
            <div
                className="available-icon"
                style={{backgroundColor: "rgb(236, 194, 56)"}}
            ></div>
        </div>
    )
}

export default UserIcon