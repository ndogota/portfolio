import React from 'react';
import {Link} from "react-scroll";
import {AiOutlineClose} from "react-icons/ai";
import "./MobileMenu.css";
const MobileMenu = ({menuItems, isOpen, toggleMenu}) => {
    return (
        <div>
            {isOpen && (
                <div className="mobileMenu">
                    <div className="headerMobileMenu">
                        <button onClick={toggleMenu}>
                            <AiOutlineClose className="closeButtonMobile"/>
                        </button>
                    </div>
                    <div className="navMobileMenu">
                        {menuItems.map((menu, index) => (
                            // eslint-disable-next-line react/jsx-no-comment-textnodes
                            <Link key={index} to={menu.title} smooth={true} duration={1000} onClick={toggleMenu}>{index}//{menu.title}</Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
