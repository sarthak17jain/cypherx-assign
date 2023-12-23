import React, { useState, useContext, useEffect } from "react";
import GroupingSectionMain from "./GroupingSectionMain";
import { StateContext } from "../context/StateContextProvider";
import { DataContext } from "../context/DataContextProvider";
import { ThemeContext } from '../context/ThemeContextProvider';

function MainSection() {
    const [state, setState] = useContext(StateContext);
    const [data, setData] = useContext(DataContext);

    const [groups, setGroups] = useState();

    const [statusBuckets, setStatusBuckets] = useState([]);
    const [priorityBuckets, setPriorityBuckets] = useState([]);
    const [userBuckets, setUserBuckets] = useState([]);
    
    const [userMapping, setUserMapping] = useState({});
    const [bucketMapping, setBucketMapping] = useState({"status":statusBuckets, "priority":priorityBuckets, "user":userBuckets});
    const [upfuncMapping, setupfuncMapping] = useState({"status":setStatusBuckets, "priority":setPriorityBuckets, "user":setUserBuckets});

    const groupAndOrderData = () => {
        const newStatusBuckets = [
            {groupTitle: "Backlog", 
             tickets: []},
            {groupTitle: "Todo", 
             tickets: []},
            {groupTitle: "In progress", 
             tickets: []},
            {groupTitle: "Done", 
             tickets: []},
            {groupTitle: "Cancelled", 
            tickets: []}
        ];

        const newPriorityBuckets = [
            {groupTitle: "No Priority", 
             tickets: []},
            {groupTitle: "Low", 
             tickets: []},
            {groupTitle: "Medium", 
             tickets: []},
            {groupTitle: "High", 
             tickets: []},
            {groupTitle: "Urgent", 
            tickets: []}
        ];

        const newUserBuckets = [];
 
        for(let i=0; i<data.users.length; i++){
            newUserBuckets.push({
                groupTitle: data.users[i].name, 
                tickets: []
            });
            userMapping[data.users[i].id] = i;
        }

        for(let ticket of data.tickets){
            switch(ticket.status){
                case "Backlog":{
                    newStatusBuckets[0].tickets.push(ticket);
                    break;
                }
                case "Todo":{
                    newStatusBuckets[1].tickets.push(ticket);
                    break;
                }
                case "In progress":{
                    newStatusBuckets[2].tickets.push(ticket);
                    break;
                }
                case "Done":{
                    newStatusBuckets[3].tickets.push(ticket);
                    break;
                }
                case "Cancelled":{
                    newStatusBuckets[4].tickets.push(ticket);
                    break;
                }       
            }
            
            // console.log(ticket);
            newPriorityBuckets[ticket.priority].tickets.push(ticket);
            newUserBuckets[userMapping[ticket.userId]].tickets.push(ticket);
        }

        const newBucketMapping = {"status":newStatusBuckets, "priority":newPriorityBuckets, "user":newUserBuckets};
        
        for(let bucket of newBucketMapping[state.grouping]){
            bucket.tickets.sort((a, b) =>  {
                    let ret;
                    if(a[state.ordering] < b[state.ordering]) ret = -1;
                    else if(a[state.ordering] > b[state.ordering]) ret = 1;
                    else ret = 0;
                    
                    if(state.ordering === "priority"){
                        ret = -ret;
                    }

                    return ret;
                }
            );
        }

        localStorage.setItem('statusBuckets', JSON.stringify(newStatusBuckets));
        localStorage.setItem('priorityBuckets', JSON.stringify(newPriorityBuckets));
        localStorage.setItem('userBuckets', JSON.stringify(newUserBuckets));

        console.log(newStatusBuckets);
        console.log(newPriorityBuckets);
        console.log(newUserBuckets);

        setStatusBuckets(newStatusBuckets)
        setPriorityBuckets(newPriorityBuckets);
        setUserBuckets(newUserBuckets);
    }

    // if(!!data){
    //     // console.log(data);
    //     groupAndOrderData();
    // }

    const configureDisplay = () => {
        const newStatusBuckets = JSON.parse(localStorage.getItem('statusBuckets'));
        const newPriorityBuckets = JSON.parse(localStorage.getItem('priorityBuckets'));
        const newUserBuckets = JSON.parse(localStorage.getItem('userBuckets'));
        if(!newStatusBuckets){
            return;
        }

        console.log(newStatusBuckets);
        console.log(newPriorityBuckets);
        console.log(newUserBuckets);

        const newBucketMapping = {"status":newStatusBuckets, "priority":newPriorityBuckets, "user":newUserBuckets};

        console.log(bucketMapping[state.grouping]);
        const newBuckets = newBucketMapping[state.grouping];
        console.log(newBuckets);

        for(let bucket of newBuckets){
            bucket.tickets.sort((a, b) =>  {
                    let ret;
                    if(a[state.ordering] < b[state.ordering]) ret = -1;
                    else if(a[state.ordering] > b[state.ordering]) ret = 1;
                    else ret = 0;
                    
                    if(state.ordering === "priority"){
                        ret = -ret;
                    }

                    return ret;
                }
            );
        }

        console.log(newBuckets);
        setGroups(newBuckets);
        // upfuncMapping[state.grouping](newBuckets);
        // console.log(statusBuckets);
        // console.log(priorityBuckets);
        // console.log(userBuckets);
    };

    useEffect(() => {
        if(!!data){
            groupAndOrderData();
        }
        if(!!state && !!state.grouping){
            configureDisplay();
        }
    }, [data]);

    useEffect(() => {
        if(!!state && !!state.grouping){
            configureDisplay();
        }
    }, [state]);

    const [isDark, setIsDark] = useContext(ThemeContext);
    const lightThemeStyle = {
        backgroundColor: '#F4F5F8'
    }
    const darkThemeStyle = {
        backgroundColor: '#010409'
    }
    const appliedTheme = isDark ? darkThemeStyle : lightThemeStyle;

    return (
        <main style={appliedTheme}>
            <section className="component-wrapper">
                {
                    !!groups && groups.map(group => (
                        <GroupingSectionMain props={group}/>
                    ))
                }
                
            </section>
        </main>
    );
}

export default MainSection;
