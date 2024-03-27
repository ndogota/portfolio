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
        <div className="skills" id="Compétences">
            <div className="content">
                <div className="titleSection">
                    <h2>1//Compétences</h2>
                </div>
                <div className="skillsContent">
                    <div className="item">
                        <MdWeb fontSize="6em"/>
                        <h3>Développement Web</h3>
                        <p>Maîtrise de HTML, CSS, JavaScript pour créer des sites web dynamiques. Expérience
                            avec ReactJS pour le développement d'applications web modernes.</p>
                    </div>
                    <div className="item">
                        <FaMobile fontSize="6em"/>
                        <h3>Développement mobile</h3>
                        <p>Expertise en React Native pour la création d'applications mobiles cross-platform, offrant une
                            expérience utilisateur fluide sur iOS et Android. Capable de connecter ces applications à des
                            back-ends pour des fonctionnalités étendues.</p>
                    </div>
                    <div className="item">
                        <FaDatabase fontSize="6em"/>
                        <h3>Gestion de base de données</h3>
                        <p>Expérience en conception de modèles de données et en manipulation de bases de données avec
                            MySQL, intégration de stockage de données sécurisé et performant dans les applications.</p>
                    </div>
                    <div className="item">
                        <MdVideogameAsset fontSize="6em"/>
                        <h3>Développement de jeux vidéo</h3>
                        <p>Maîtrise de C# et Unity pour créer des expériences de jeu immersives et interactives.
                            Capable de concevoir des mondes riches en détails, des mécaniques de jeu captivantes et des
                            narrations profondes pour engager divers publics.</p>
                    </div>
                    <div className="item">
                        <FaCloud fontSize="6em"/>
                        <h3>Infrastructure cloud et devops</h3>
                        <p>Compétence en configuration et gestion d'infrastructures cloud avec AWS/GCP, automatisation
                            des pipelines de CI/CD avec Jenkins/GitLab CI, et conteneurisation avec Docker et Kubernetes,
                            permettant un déploiement et une scalabilité efficaces.</p>
                    </div>
                    <div className="item">
                        <MdOutlineSecurity fontSize="6em"/>
                        <h3>Cybersécurité</h3>
                        <p>Connaissance des meilleures pratiques et des solutions de sécurité pour protéger les données
                            et les systèmes d'information contre les cyberattaques.</p>
                    </div>
                    <div className="item">
                        <GiArtificialIntelligence fontSize="6em"/>
                        <h3>Intelligence artificielle et machine learning</h3>
                        <p>Fondements en Python pour le développement d'algorithmes, de machine learning et d'intelligence
                            artificielle, appliqués dans des projets de traitement de données et d'automatisation des processus.</p>
                    </div>
                    <div className="item">
                        <MdOutlineManageHistory fontSize="6em"/>
                        <h3>Gestion de projet</h3>
                        <p>Capacité à gérer des projets de développement web et mobile du concept à la livraison, en
                            utilisant des méthodologies agiles pour assurer une collaboration efficace et une exécution
                            dans les délais.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
