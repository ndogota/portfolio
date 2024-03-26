import React from "react";
import { Link } from "react-scroll";
import { LuArrowUp } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

import './StickyHeader.css'

const StickyHeader = ({menuItems, width, breakpoint, isOpen, toggleMenu}) => {
    return (
        <>
            {width < breakpoint ? (
                <div className="stickyHeaderMobile">
                    <div className="logo">
                        <Link to="home" smooth={true} duration={1000} >
                            <h1>nicolaedogotaru</h1>
                        </Link>
                    </div>
                    <button onClick={toggleMenu}>
                        <GiHamburgerMenu className="hamburger"/>
                    </button>
                </div>) : (
                <div className="stickyHeader">
                    <div className="logo">
                        <Link to="home" smooth={true} duration={1000} >
                            <h1>nicolaedogotaru</h1>
                        </Link>
                    </div>
                    <nav className="navStickyHeader">
                        {menuItems.map((menu, index) => (
                            // eslint-disable-next-line react/jsx-no-comment-textnodes
                            <Link key={index} to={menu.title} smooth={true} duration={1000}>{index}//{menu.title}</Link>
                        ))}
                    </nav>
                </div>
            )}
            <Link to="home" smooth={true} duration={1000} className="homeButton"><LuArrowUp fontSize="3em"/></Link>
        </>
    );

    /*
    return width < breakpoint ? (
        <div className="stickyHeader">
            <div className="logo">
                <p>NicolaeDogotaru</p>
            </div>
            <button onClick={toggleMenu}>
                {isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            </button>
        </div>) : (
            <div className="stickyHeader">
                <div className="logo">
                    <p>NicolaeDogotaru</p>
                </div>
                <nav>
                    {menuItems.map(menu => (
                        <Link to={menu.title} smooth={true} duration={1000}>{menu.title}</Link>
                    ))}
                </nav>
            </div>
    );*/
};

export default StickyHeader;
