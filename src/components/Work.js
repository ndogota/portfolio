import React, { useState } from 'react';

import WorkMenu from "./WorkMenu";
import Technology from "../utils/Technology";

import "./Work.css"

import Projects from "../Projects.json";

const Work = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [project, setProject] = useState(null);

    const toggleMenu = (project) => {
        if (!isOpen) {
            setIsOpen(true)
            setProject(project)
            document.body.style.overflow = 'hidden';
        } else {
            setIsOpen(false)
            document.body.style.overflow = '';
        }
    };

    const projects = Projects;

    const [filter, setFilter] = useState('');

    const filteredProjects = filter
        ? projects.filter(project => project.type === filter)
        : projects;

    const workStyle = {
        backdropFilter: isOpen ? 'none': 'hue-rotate(100deg)',
        WebkitBackdropFilter: isOpen ? 'none' : 'hue-rotate(100deg)'
    }

    return (
        <div style={workStyle} className="work" id="projets">
            <div className="content">
                <div className="titleSection">
                    <h2>2//projets</h2>
                </div>
                <div className="buttonProjects">
                    <button className={filter === '' ? 'selected' : ''} onClick={() => setFilter('')}>tous</button>
                    <button className={filter === 'web' ? 'selected' : ''} onClick={() => setFilter('web')}>web</button>
                    <button className={filter === 'mobile' ? 'selected' : ''} onClick={() => setFilter('mobile')}>mobile</button>
                    <button className={filter === 'script' ? 'selected' : ''} onClick={() => setFilter('script')}>script</button>
                    <button className={filter === 'software' ? 'selected' : ''} onClick={() => setFilter('software')}>logiciel</button>
                    <button className={filter === 'network' ? 'selected' : ''} onClick={() => setFilter('network')}>réseaux</button>
                    <button className={filter === 'game' ? 'selected' : ''} onClick={() => setFilter('game')}>jeu</button>
                </div>
                <div className="gridProjects">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="itemProject" onClick={() => toggleMenu(project)}>
                            {<h4>{project.title}</h4>}
                            <Technology technologies={project.technology} />
                        </div>
                    ))}

                    {Array.from({ length: projects.length - filteredProjects.length }).map((_, index) => (
                        <div className="itemProject itemProjectDisabled">
                        </div>
                    ))}
                </div>

                <WorkMenu isOpen={isOpen} toggleMenu={toggleMenu} project={project}/>
            </div>
        </div>
    );
};

export default Work;

/*

{Array.isArray(project.technology) && project.technology.map((tech, index) => (
                                <div key={index}>{tech}</div>
                            ))}
 */
