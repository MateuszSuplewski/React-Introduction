import React from 'react';



const NavItem = (props) => {
    const {url,text,style} = props
    return ( 
        <li>
            <a href={url} style={style}>{text}</a>
        </li>
    )
}

NavItem.defaultProps = {
    url: '/',
    text: '-',
    style:{
        textDecoration: 'none',
        color: '#4287f5',
        height: '100%',
        fontSize: '2rem',
        fontFamily: 'Roboto, Ubuntu, sans-serif',
    }
}

export default NavItem