import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Link to="/">Home Page</Link>
            &nbsp;
            <Link to="/preview">Preview Page</Link>
            &nbsp;
            <Link to="/markdown">Markdown Page</Link>
        </>
    )
}

export default Header
