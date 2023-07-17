import React, { useState, useEffect } from 'react';
import { API_LINK } from '../../../constants';

import DevloperCardData from '../cards/DevloperCardData';

export default function DevCards({handleDevDetails}) {
    const [devsData, setDevsData] = useState([]);

    useEffect(() => {
        fetchDevsData();
    }, []);

    const fetchDevsData = () => {
        fetch(`${API_LINK}/api/dev`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDevsData(data.data);
            })
            .catch((error) => console.log(error));
    };


    return (
        <>
            <h1 className="text-3xl pb-4 mx-3">Developers</h1>
            {/* <button onClick={()=>handleDevDetails({})}>Click</button> */}
            <div className="bg-gray-300 h-full flex flex-wrap justify-center p-4 item-top rounded-lg">
                {devsData.slice(0,8).map((devData, index) => (
                    <DevloperCardData key={index} devData={devData} handleDevDetails={handleDevDetails}/>
                ))}
            </div>
        </>
    );
}
