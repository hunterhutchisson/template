import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Link to="/">Home Page</Link>
            &nbsp;
            <Link to="/sample">Sample Page</Link>
        </>
    )
}

export default Header
