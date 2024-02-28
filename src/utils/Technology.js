import React from 'react';

import "./Technology.css"

const Technology = (technologies) => {
    const colorScheme = {
        "unity": "rgba(34,44,55,0.75)",
        "c#": "rgba(105,0,129,0.75)",
        "c": "rgba(101,155,211,0.75)",
        "python": "rgba(247,195,29,0.75)",
        "cloud azure": "rgba(0,150,241,0.75)",
        "javascript": "rgba(233,212,77,0.75)",
        "html": "rgba(228,77,38,0.75)",
        "css": "rgba(38,78,228,0.75)",
        "mysql": "rgba(0,118,144,0.75)",
        "react native": "rgba(98,218,252,0.7)",
        "nodejs": "rgba(130,205,42,0.75)",
        "mongodb": "rgba(0,104,74,0.75)",
        "flask": "rgba(59,171,195,0.75)",
        "raspberry pi": "rgba(189,9,64,0.75)",
        "sdl": "rgba(122,132,148,0.75)",
        "bash": "rgba(0,0,0,0.75)",
        "reactjs": "rgba(97,219,251,0.75)",
        "shopify": "rgba(149,191,71,0.75)",
        "java": "rgba(236,32,37,0.75)",
        "kotlin": "rgba(155,57,243,0.75)",
        "php": "rgba(120,124,180,0.75)",
        "kubernetes": "rgba(50,108,230,0.75)",
        "zabbix": "rgba(212,0,0,0.75)",
        "k3s": "rgba(255,198,28,0.75)",
        "k8s": "rgba(37,81,169,0.75)",
    }

    return (
        <div className="technologyDiv">
            {Array.isArray(technologies.technologies) && technologies.technologies.map((tech, index) => (
                <div key={index} className="technologyItem" style={{backgroundColor: colorScheme[tech]}}>
                    {tech}
                </div>
            ))}
        </div>
    );
};

export default Technology;
