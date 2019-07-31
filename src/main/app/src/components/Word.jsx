import React from 'react'

export const Word = (props) => {
    return (
        <div className="col">
            <h3>{props.engName} : {props.rusName}</h3>
            <div className="row">
                <div className="col">Rate: {props.rate}</div>
            </div>
        </div>
    )
};