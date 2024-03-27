import React from 'react';
import {Typewriter} from "react-simple-typewriter";
import {Link} from "react-scroll";

import Header from "./header/Header";

import "./Home.css"

const Home = ({menuItems, width, breakpoint, isOpen, toggleMenu}) => {


    return (
        <div className="home" id="Accueil">
            <Header menuItems={menuItems} width={width} breakpoint={breakpoint} isOpen={isOpen} toggleMenu={toggleMenu}/>
            <div className="homeLayout">
                <div className="homeContent">
                    <h1 className="homeTypeWriter">
                        NicolaeDogotaru.{''}
                        <span style={{ color: 'white'}}>
                            <Typewriter
                                words={['Web', 'Mobile', 'Script', 'Logiciel', 'Réseaux', 'Jeu', 'Design']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    <Link to="skills" smooth={true} duration={1000} className="scrollDownAnimation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
