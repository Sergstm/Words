import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navigation = ({path, name}) => {
    return (
        <NavLink to={path}>
            <button className="btn btn-primary border">{name}</button>
        </NavLink>
    )
};