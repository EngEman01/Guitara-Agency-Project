import { useState, useEffect, useRef } from 'react';
import GuitaraNavbar from './Navbar.module.css';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className={GuitaraNavbar.guitaraNavbar}>
            <div className={GuitaraNavbar.guitaraBackground}>
                <div className={GuitaraNavbar.guitaraLogo}>
                    <img
                        className={GuitaraNavbar.logoImage}
                        src='./images/guitara logo.png'
                        alt="Logo"
                    />


                </div>

                {/* Links for desktop and tablet */}
                <div className={`${GuitaraNavbar.links} ${isMenuOpen ? GuitaraNavbar.showMenu : ''}`}>
                    <ul>
                        <li><a href="#" className={GuitaraNavbar.elementLink}>home</a></li>
                        <li><a href="#" className={GuitaraNavbar.elementLink}>about</a></li>
                        <li><a href="#" className={GuitaraNavbar.elementLink}>service</a></li>
                        <li><a href="#" className={GuitaraNavbar.elementLink}>blog</a></li>
                        <li><a href="#" className={GuitaraNavbar.elementLink}>contactUs</a></li>
                    </ul>
                </div>

                {/* ToggleMenu Icon for mobile */}
                <div className={GuitaraNavbar.toggleMenu} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}
