import React from 'react';
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link> <br />
            <Link to='/about'>About</Link> <br />
            <Link to='/about/contact'>About Contact</Link> <br />
            <Link to='/error'>Not working link</Link>
        </div>
    )
}

export const Home = () => {
    return (
        <div>
            <h1> Home component </h1>
        </div>
    )
}

export const About = () => {
    return (
        <div>
            <h1> About component </h1>
        </div>
    )
}

export const AboutContact = () => {
    return (
        <div>
            <h1> Contact component </h1>
        </div>
    )
}

export const NotFound = () => {
    return (
        <div>
            <h1> Not found! </h1>
        </div>
    )
}