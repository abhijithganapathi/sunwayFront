import { useState } from 'react'
import Quote from "../Quote/Quote";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/sunway_logo_white.png'

import './Header.css'

function Header() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const[color,setColor]=useState(false)
    const changeColor=()=>{
        if(window.scrollY>=90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const closeMenu = () => setClick(false)

    return (
        <div className={color?'header header-bg':'header'}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FontAwesomeIcon icon={faTimes} size={30} style={{ color: '#ffffff' }} />)
                        : (<FontAwesomeIcon icon={faBars} size='xl' style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}><Quote/></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header

