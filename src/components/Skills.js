import React from "react";

import { MdWeb } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdVideogameAsset } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineManageHistory } from "react-icons/md";

import "./Skills.css"

const Skills = () => {
    return (
        <div className="skills" id="SKILLS">
            <div className="content">
                <div className="titleSection">
                    <h2>1//SKILLS</h2>
                </div>
                <div className="skillsContent">
                    <div className="item">
                        <MdWeb fontSize="6em" />
                        <h3>Web Development</h3>
                        <p>Proficiency in HTML, CSS, and JavaScript to create dynamic websites. Experience with ReactJS for developing modern web applications.</p>
                    </div>
                    <div className="item">
                        <FaMobile fontSize="6em" />
                        <h3>Mobile Development</h3>
                        <p>Expertise in React Native for creating cross-platform mobile applications, delivering a seamless user experience on iOS and Android. Skilled in connecting these applications to backends for extended functionality.</p>
                    </div>
                    <div className="item">
                        <FaDatabase fontSize="6em" />
                        <h3>Database Management</h3>
                        <p>Experience in designing data models and handling databases with MySQL, integrating secure and efficient data storage into applications.</p>
                    </div>
                    <div className="item">
                        <MdVideogameAsset fontSize="6em" />
                        <h3>Game Development</h3>
                        <p>Proficiency in C# and Unity for creating immersive and interactive gaming experiences. Skilled in designing detailed worlds, captivating game mechanics, and deep narratives to engage diverse audiences.</p>
                    </div>
                    <div className="item">
                        <FaCloud fontSize="6em" />
                        <h3>Cloud Infrastructure and DevOps</h3>
                        <p>Expertise in configuring and managing cloud infrastructures with AWS/GCP, automating CI/CD pipelines using Jenkins/GitLab CI, and containerization with Docker and Kubernetes, enabling efficient deployment and scalability.</p>
                    </div>
                    <div className="item">
                        <MdOutlineSecurity fontSize="6em" />
                        <h3>Cybersecurity</h3>
                        <p>Knowledge of best practices and security solutions to protect data and information systems from cyberattacks.</p>
                    </div>
                    <div className="item">
                        <GiArtificialIntelligence fontSize="6em" />
                        <h3>Artificial Intelligence and Machine Learning</h3>
                        <p>Foundations in Python for developing machine learning algorithms and artificial intelligence, applied in data processing and process automation projects.</p>
                    </div>
                    <div className="item">
                        <MdOutlineManageHistory fontSize="6em" />
                        <h3>Project Management</h3>
                        <p>Ability to manage web and mobile development projects from concept to delivery, using agile methodologies to ensure effective collaboration and on-time execution.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
