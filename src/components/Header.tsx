import React from 'react'
import Navigation from './Navigation'
import Logo from './Logo'
import AccountIcon from './AccountIcon'


function Header() {
    return (
        <header>
            <div className="flex justify-between items-center">
                <Logo />
                <AccountIcon buttonClassName="mx-5" />
            </div>
            <Navigation />
        </header>
    )
}

export default Header