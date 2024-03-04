import logo from "../assets/shared/logo.svg"
import hamburger from "../assets/shared/icon-hamburger.svg"
import close from "../assets/shared/icon-close.svg"

import { Link } from "react-router-dom"

import "../styles/nav.css"
import { useEffect, useState } from "react"


export default function Nav(){ 
    const [active , setActive] = useState(true)

    useEffect(() => {
        if (window.innerWidth > 700)
        setActive(false)
    },[])

    const toggleNav = () =>{ 
        setActive(prevstate => !prevstate)
    }
    
    const boom = 
            <ul className="nav-menu navbar">
                
                <span className="close" onClick={toggleNav}>
                    <img src={close} alt="" />
                </span>
                
                <li className="nav-item" >
                    <Link to="/">
                        <span className="nav-num">00</span>
                        Home
                    </Link>
                </li>
                

                
                <li className="nav-item" >
                    <Link to="/Destination">
                        <span className="nav-num">01</span>
                        Destination
                    </Link>
                </li>
                
                
                <li className="nav-item" >
                    <Link to="/Crew">
                        <span className="nav-num">02</span>
                        Crew
                    </Link>
                </li>
                
                
                
                <li className="nav-item" >
                    <Link to="/Technology">
                        <span className="nav-num">03</span>
                        Technology
                    </Link>
                </li>
                    
                
        
            </ul>
    return (
        <nav >
      
            {/* Logo */}
            <a href="#" >
                <img src={logo} alt="Space Logo" />
            </a>
            <hr />

            {/* Navigation Menu */}
            {/* <ul className="nav-menu">
                
                <li className="nav-item" >
                
                    <span className="nav-num">00</span>
                    Home
                
                </li>
                <li className="nav-item" >
                
                    <span className="nav-num">01</span>
                    Destination
                
                </li>
                <li className="nav-item" >
                
                    <span className="nav-num">02</span>
                    Crew
                
                </li>
                <li className="nav-item" >
                
                    <span className="nav-num">03</span>
                    Technology
                
                </li>
        
            </ul> */}

            {/* Hamburger */}
            {active ? <span className="hamburger" onClick={() => toggleNav()} ><img src={hamburger} alt="" /></span> : boom}

        </nav>
    )
}