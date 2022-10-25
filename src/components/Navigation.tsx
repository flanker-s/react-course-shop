import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Menu from './Menu'

function Navigation() {
    const [menu, setMenu] = useState(false)
    const arrowClass = menu ? "block box-border rotate-90" : "block box-border"
    return (
        <nav className="h-[50px] flex justify-center items-center px-5 bg-gray-500 text-white">
            <ul className="flex items-center">
                <li onMouseLeave={()=>setMenu(false)}>
                    <div className="flex mr-2 px-3" onMouseOver={()=>setMenu(true)}>
                        <Link className="block box-border" to="/">Catalog</Link>
                        <ArrowRightIcon className={arrowClass}/>
                    </div>
                    {menu && <Menu/>}
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation