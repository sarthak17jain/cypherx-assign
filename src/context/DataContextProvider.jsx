import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const DataContext = createContext(null);

function DataContextProvider({children}) {
    const [data, setData] = useState();
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers`);
                console.log(res);
                setData(res.data);
            }catch(error){
                console.log('error', error);
            }
        }
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={[data, setData]}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider