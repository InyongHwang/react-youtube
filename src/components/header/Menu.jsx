import React from 'react'

import { headerMenus, searchKeyword } from '../../data/header'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {

    const localtion = useLocation();

    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {headerMenus.map((menu, key) => (
                    <li key={key} className={localtion.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {searchKeyword.map((keyword, key) => (
                    <li key={key} className={localtion.pathname === keyword.src ? 'active' : ''}>
                        <Link to={keyword.src}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu