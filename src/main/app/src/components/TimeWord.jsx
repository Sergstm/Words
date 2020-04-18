import React from 'react'
import dateFormat from 'dateformat'

export const TimeWord = (props) => {
    return (
        <div className="col">
            <h3>{props.engName} : {props.rusName}</h3>
            <div className="row">
                <div className="col">
                    Time: {dateFormat(new Date(props.dateTime), 'yyyy-mm-dd , HH:MM:ss')}
                </div>
                <div className="col">Rate: {props.rate}</div>
            </div>
        </div>
    )
};