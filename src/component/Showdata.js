import React from 'react'

export default function Showdata(props) {
    return (
        <>
            <div className="card my-4">
                <div className="card-header">{props.stateName}</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Total Casese {props.confirmed}</li>
                    <li className="list-group-item">Total Active Cases {props.active}</li>
                    <li className="list-group-item">Total Recovered {props.recovered}</li>
                    <li className="list-group-item">Deaths {props.deltadeaths}</li>
                    <li className="list-group-item">Last Update {props.lastupdatedtime}</li>
                </ul>
            </div>
        </>
    )
}
