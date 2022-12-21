import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <>
            <Link to={'/my-account'}>My Account</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/invoices'}>Invoices</Link>
        </>
    )
}
