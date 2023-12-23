import { createContext, useState, useEffect } from 'react';
export const StateContext = createContext(null);

const StateContextProvider = ({children}) => {
    const [state, setState] = useState({});
    useEffect(() => {
        const localState = localStorage.getItem('state');
        setState(!!localState ? JSON.parse(localState) : {
            "grouping": "status",
            "ordering": "priority"
        });
    }, []);

    return (
        <StateContext.Provider value={[state, setState]}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContextProvider;