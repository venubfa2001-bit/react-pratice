import React, {useState} from 'react';

const Pratice = () => {

    const list = [{ name: "Venu", role: "Admin" }, { name: "Raju", role: "User" }, { name: "Kumar", role: "User" }, { name: "Suresh", role: "User" }];
console.log("Pratice component rendered");
    return (
        <div>
            <h1>Pratice</h1>
            <ul>
                {
                  list.map((item, index) => <li key={index}>{item.name} - {item.role}</li>)  
                }
            </ul>
        </div>
    );
};

export default React.memo(Pratice);

// React.memo | useMemo | useCallback - Memorization in React