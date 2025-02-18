import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ErrorPages = () => {
    const error = useRouteError()

    return (
        <>
            <h1>Oops! An Error Occurred.</h1>
            {error && <p>{error.data || error.message}</p>}
            <NavLink style={{ textDecoration: 'none'}} to="/">
                <button>Home</button> 
            </NavLink>
        </>
    )
}

export default ErrorPages
