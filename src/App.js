import React, {useEffect, useState} from "react";

import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import StickyHeader from "./components/header/StickyHeader";
import MobileMenu from "./components/MobileMenu";
import useViewport from "./hooks/useViewport";
import Loading from "./components/Loading";

import './Reset.css';
import './App.css';
import AnimatedCursor from "react-animated-cursor";

function App() {
    const { width } = useViewport();
    const breakpoint = 768;
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
        setTimeout(() => {
            setAnimationDone(true);
        }, 0);
    }, []);

    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true)
            document.body.style.overflow = 'hidden';
        } else {
            setIsOpen(false)
            document.body.style.overflow = '';
        }
    };

    const menuItems = [
        {
            id: 1,
            title: "accueil",
        },
        {
            id: 2,
            title: "compétences",
        },
        {
            id: 3,
            title: "projets",
        },
        {
            id: 4,
            title: "parcours",
        },
        {
            id: 5,
            title: "contact",
        },
    ]

    const handleScroll = () => {
        const thresholdVH = 50;
        const thresholdPixels = window.innerHeight * (thresholdVH / 100);
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > thresholdPixels) {
            setShowStickyHeader(true);
        } else {
            setShowStickyHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (loading) {
        return <Loading/>
    }

    // TODO : -put bg into a components
    return (
        <div className={`App ${animationDone ? 'appFadeIn' : ''}`}>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>

            <AnimatedCursor color='255, 255, 255'/>

            {showStickyHeader && <StickyHeader isVisible={showStickyHeader} menuItems={menuItems} width={width} breakpoint={breakpoint} toggleMenu={toggleMenu}/>}

            <Home menuItems={menuItems} width={width} breakpoint={breakpoint} toggleMenu={toggleMenu}/>
            <Skills />
            <Work />
            <Experience />
            <Contact />
            <MobileMenu menuItems={menuItems} isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
    );
}

export default App;
