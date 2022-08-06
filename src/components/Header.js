import React from 'react';
import Logo from './Logo';
import Nav from './Nav';


const Header = props => {
    const {style} = props
    return (
        <header style={style}>
        <Logo/>
        <Nav/>
        </header>
    )
}

Header.defaultProps = {
    style: {
        display:'flex',
        height:'100px',
        width:'100%',
        backgroundColor: '#c7dcfc'
    }
}


export default Header