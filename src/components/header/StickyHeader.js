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
                            <h1>NICOLAEDOGOTARU</h1>
                        </Link>
                    </div>
                    <button onClick={toggleMenu}>
                        <GiHamburgerMenu className="hamburger"/>
                    </button>
                </div>) : (
                <div className="stickyHeader">
                    <div className="logo">
                        <Link to="home" smooth={true} duration={1000} >
                            <h1>NICOLAEDOGOTARU</h1>
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
};

export default StickyHeader;
