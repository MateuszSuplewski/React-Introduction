import React from 'react';
import NavItem from './NavItem';


const Nav = (props) => {
    const {items,navStyle,ulStyle} = props
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
            {items.map(item => {
                const {url, section} = item
                return <NavItem url={url} text={section} key={section} />
            })}
        </ul>
        </nav>
    )
}

Nav.defaultProps = {
    items : [
        {section: 'Home', url: '/'},
        {section: 'About us', url: '/about'},
        {section: 'Get in touch', url: '/contact'},
    ],
    navStyle: {
        width:'85%'
    },
    ulStyle: {
        display:'flex',
        listStyleType: 'none',
        height:'100%',    
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingInlineStart: '0px',
        marginBlockStart: '0px',
        marginBlockEnd: '0px',
        marginLeft: '20%',
    }
}

export default Nav