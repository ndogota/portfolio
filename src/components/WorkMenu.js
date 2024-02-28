import React from 'react';
import "./WorkMenu.css"
import Technology from "../utils/Technology";
import { AiOutlineClose } from "react-icons/ai";

import {useEffect} from "react";

const WorkMenu = ({isOpen, toggleMenu, project}) => {
    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();

                if(isOpen) {
                    toggleMenu();
                }
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [isOpen, toggleMenu]);


    return (
        <div>
            {isOpen && (
                <div className="workMenu">
                    <div className="headerWorkMenu">
                        <button onClick={toggleMenu}>
                            <AiOutlineClose fontSize="3em"/>
                        </button>
                    </div>
                    <div className="contentWorkMenu">
                        <div>
                            <p>titre : {project.title}</p>
                        </div>
                        <div>
                            <p>technologies :</p>
                            <Technology technologies={project.technology}/>
                        </div>
                        <div>
                            <p>description : {project.description}</p>
                        </div>
                        <div>
                            <p>github : {project.github}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkMenu;
