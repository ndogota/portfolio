import React, {useEffect, useState} from "react";
import AnimatedCursor from "react-animated-cursor";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import StickyHeader from "./components/header/StickyHeader";
import MobileMenu from "./components/MobileMenu";
import useViewport from "./hooks/useViewport";
import Loading from "./components/Loading";
import AnimatedBackground from "./components/AnimatedBackground";

import './Reset.css';
import './App.css';
import {BrowserView} from "react-device-detect";

function App() {
    const { width } = useViewport();
    const breakpoint = 768;
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [animationDone, setAnimationDone] = useState(false);

    const menuItems = [
        {
            id: 1,
            title: "HOME",
        },
        {
            id: 2,
            title: "SKILLS",
        },
        {
            id: 3,
            title: "PROJECTS",
        },
        {
            id: 4,
            title: "CAREER",
        },
        {
            id: 5,
            title: "CONTACT",
        },
    ];

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

    if (loading) {
        return <Loading/>
    }

    return (
        <div className={`App ${animationDone ? 'appFadeIn' : ''}`}>
            <Analytics />
            <SpeedInsights/>

            {showStickyHeader && <StickyHeader isVisible={showStickyHeader} menuItems={menuItems} width={width} breakpoint={breakpoint} toggleMenu={toggleMenu}/>}

            <BrowserView>
                <AnimatedCursor color='255, 255, 255'/>
            </BrowserView>

            <Home menuItems={menuItems} width={width} breakpoint={breakpoint} toggleMenu={toggleMenu}/>
            <Skills />
            <Work />
            <Experience />
            <Contact />

            <MobileMenu menuItems={menuItems} isOpen={isOpen} toggleMenu={toggleMenu} />
            <AnimatedBackground />
        </div>
    );
}

export default App;
