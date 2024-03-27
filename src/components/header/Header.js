import React from "react";
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";

import "./Header.css"

// TODO : mutualiser le sticky et le header normal (un truc a faire avec le css a modifier -> padding horizontal)
const Header = ({menuItems, width, breakpoint, isOpen, toggleMenu}) => {
    return width < breakpoint ? (
        <div className="headerMobile">
            <div className="logoMobile">
                <h1>NicolaeDogotaru</h1>
            </div>
            <button onClick={toggleMenu}>
                <GiHamburgerMenu className="hamburger"/>
            </button>
        </div>) : (
        <div className="headerDesktop">
            <div className="logoDesktop">
                <h1>NicolaeDogotaru</h1>
            </div>

            <div className="navHeader">
                {menuItems.map((menu, index) => (
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    <Link key={index} to={menu.title} smooth={true} duration={1000}>{index}//{menu.title}</Link>
                ))}
            </div>
        </div>)
};

export default Header;
