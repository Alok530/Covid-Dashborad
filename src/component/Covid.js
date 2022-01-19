import React from 'react'
import { useState,useEffect } from 'react';
import Showdata from './Showdata';

export default function Covid() {
    const [state, setstate] = useState({data:[]});
    
    useEffect(() => {
        // fetch() it return promises so await
        // the data we are getting after fetch url is in form of (json) which can not be use in javascript
        // so we need to convert json data into javascript Object by the help of { .json() } methods 
        // let parsedData = await data.json();
        fun();
    }, [])

    const fun = async () => {
        let url = 'https://data.covid19india.org/data.json'
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(`data is`,parsedData);
        setstate({data:parsedData.statewise});
    }

    return (
        <div className="container my-4">
            <h1 className="text-center">COVID-19 CORONAVIRUS TRACKER</h1>
            <div className="row">
                {state.data.map((element) => {
                    return <div className="col-md-6" key={element.state}>
                        <Showdata
                            stateName={element.state}
                            active={element.active}
                            confirmed={element.confirmed}
                            deltadeaths={element.deltadeaths}
                            recovered={element.recovered}
                            lastupdatedtime={element.lastupdatedtime}
                        />
                    </div>;
                })}
            </div>
        </div>
    )
}