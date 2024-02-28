import React, { useState } from 'react';
import "./Work.css"
import WorkMenu from "./WorkMenu";
import Technology from "../utils/Technology";

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

    const projects = [
        {
            "id": 1,
            "type": "game",
            "title": "paradygm",
            "technology": ["unity", "c#"],
            "description": [
                "Conception d'un univers de jeu immersif avec Unity, créant une maison mystérieuse pleine d'énigmes et de secrets à découvrir, offrant une expérience de jeu captivante et riche en exploration.",
                "Développement de mécaniques de jeu interactives en C#, incluant des puzzles complexes et des défis logiques qui testent l'intelligence et la perspicacité des joueurs, augmentant l'engagement et la rétention.",
                "Intégration d'éléments narratifs pour enrichir l'expérience de jeu, utilisant des dialogues, des journaux intimes, et des indices dispersés à travers la maison pour dévoiler progressivement l'histoire mystérieuse derrière Paradygm."
            ],
            "github": "https://github.com/ndogota/paradygm"
        },
        {
            "id": 2,
            "type": "mobile",
            "title": "e_garden",
            "technology": ["react native", "nodejs", "mongodb"],
            "description": [
                "Développement d'une application mobile cross-platform avec React Native, permettant aux utilisateurs desurveiller et de gérer à distance l'entretien de leurs jardins via une interface intuitive.",
                "Conception d'un backend robuste utilisant Node.js et MongoDB pour le stockage et la gestion efficace des données relatives à l'état des plantes, incluant l'humidité, la température, et l'exposition solaire.",
                "Intégration d'un système d'automatisation basé sur Raspberry Pi et Python avec Flask, pour le contrôle en temps réel des systèmes d'irrigation et de lumière, réduisant le besoin d'intervention manuelle et optimisant la croissance des plantes."
            ],
            "github": "https://github.com/ndogota/e_garden_5617da376"
        },
        {
            "id": 3,
            "type": "script",
            "title": "my_ls",
            "technology": ["c"],
            "description": [
                "Implémentation d'une version personnalisée de la commande Unix ls, offrant des options étendues pour afficher les fichiers et les répertoires.",
                "Gestion des options telles que l pour le format long, a pour afficher les fichiers cachés, et r pour inverser l'ordre d'affichage.",
                "Optimisation des performances et de la précision dans la gestion des liens symboliques, des permissions de fichiers, et des métadonnées."
            ],
            "github": "https://github.com/ndogota/my_ls"
        },
        {
            "id": 4,
            "type": "software",
            "title": "my_parallelepiped",
            "technology": ["c"],
            "description": [
                "Conception d'une application pour calculer les propriétés d'un parallélépipède, y compris le volume et l'aire de surface, à partir de dimensions données.",
                "Interface utilisateur simple pour saisir les dimensions et choisir les calculs à effectuer.",
                "Implémentation de validations pour s'assurer que les entrées sont valides et que les calculs sont précis."
            ],
            "github": "https://github.com/ndogota/my_parallelepiped"
        },
        {
            "id": 5,
            "type": "software",
            "title": "stack_machine",
            "technology": ["c"],
            "description": [
                "Développement d'une machine à pile simulée pour exécuter une série d'instructions basiques, simulant le fonctionnement d'une architecture CPU simplifiée.",
                "Prise en charge des opérations arithmétiques de base, du stockage et de la récupération de valeurs dans la pile.",
                "Interface pour charger et exécuter des scripts définissant les instructions et les valeurs initiales de la pile."
            ],
            "github": "https://github.com/ndogota/stack_machine"
        },
        {
            "id": 6,
            "type": "game",
            "title": "bomberman",
            "technology": ["c", "sdl"],
            "description": [
                "Réalisation d'un clone du jeu classique Bomberman en C, avec un mode multijoueur en réseau local.",
                "Gestion des déplacements, placement des bombes, et collecte de power-ups dans un environnement de jeu dynamique.",
                "Implémentation d'un moteur de jeu simple et d'une interface graphique pour une expérience utilisateur immersive."
            ],
            "github": "link"
        },
        {
            "id": 7,
            "type": "script",
            "title": "little_ansible",
            "technology": ["python"],
            "description": [
                "Création d'un outil inspiré par Ansible pour automatiser la configuration et la gestion de systèmes Unix/Linux.",
                "Scripting Python pour la gestion des tâches récurrentes, comme la mise à jour de logiciels et la configuration de services.",
                "Support pour des configurations modulaires et réutilisables, permettant une personnalisation facile pour différents environnements."
            ],
            "github": "link"
        },
        {
            "id": 8,
            "type": "script",
            "title": "chroot_manager",
            "technology": ["python"],
            "description": [
                "Développement d'une interface de gestion pour créer et gérer des environnements chroot sécurisés sur des systèmes Linux.",
                "Automatisation de la création de chroot, incluant la copie des binaires nécessaires et la configuration de l'environnement isolé.",
                "Fonctionnalités pour sauvegarder et restaurer des états de chroot, facilitant les tests et le déploiement d'applications."
            ],
            "github": "link"
        },
        {
            "id": 9,
            "type": "software",
            "title": "reco_face",
            "technology": ["python", "cloud azure"],
            "description": [
                "Conception d'un système de reconnaissance faciale en utilisant les services cloud Azure pour l'analyse d'images.",
                "Intégration de l'API Azure Face pour détecter, identifier et vérifier les visages dans des images ou des flux vidéo.",
                "Développement d'une interface utilisateur pour l'inscription de nouveaux visages et la gestion de la base de données de visages connus."
            ],
            "github": "link"
        },
        {
            "id": 10,
            "type": "script",
            "title": "distrib_builder",
            "technology": ["bash"],
            "description": [
                "Création d'un script Bash pour automatiser la compilation et l'assemblage de distributions Linux personnalisées.",
                "Fonctionnalités pour sélectionner des paquets spécifiques, configurer des réglages par défaut, et créer des images ISO bootables.",
                "Intégration de contrôles de qualité et de tests pour assurer la stabilité et la compatibilité des distributions générées."
            ],
            "github": "link"
        },
        {
            "id": 11,
            "type": "web",
            "title": "pong_js",
            "technology": ["javascript"],
            "description": [
                "Conception et développement d'une version moderne du jeu classique Pong en utilisant JavaScript pur, mettant en œuvre des principes de programmation orientée objet pour gérer les entités du jeu comme les raquettes et la balle.",
                "Implémentation de mécanismes de collision et de rebond pour simuler une expérience de jeu réaliste, avec ajout de niveaux de difficulté progressifs.",
                "Implémentation de mécanismes de collision et de rebond pour simuler une expérience de jeu réaliste, avec ajout de niveaux de difficulté progressifs."
            ],
            "github": "link"
        },
        {
            "id": 12,
            "type": "web",
            "title": "pokedex_js",
            "technology": ["reactjs"],
            "description": [
                "Implémentation de mécanismes de collision et de rebond pour simuler une expérience de jeu réaliste, avec ajout de niveaux de difficulté progressifs.",
                "Implémentation de mécanismes de collision et de rebond pour simuler une expérience de jeu réaliste, avec ajout de niveaux de difficulté progressifs.",
                "Mise en place d'un système de pagination et de filtres pour améliorer l'expérience utilisateur lors de la navigation dans la base de données des Pokémon."
            ],
            "github": "link"
        },
        {
            "id": 14,
            "type": "web",
            "title": "ownleadr",
            "technology": ["html", "css", "javascript"],
            "description": [
                "Création d'un tableau de bord de gestion de projet en ligne, offrant des fonctionnalités pour la création de tâches, l'assignation à des membres de l'équipe, et le suivi de l'avancement.",
                "Utilisation de techniques avancées en HTML, CSS, et JavaScript pour créer une interface utilisateur dynamique et réactive adaptée à différents appareils et tailles d'écran.",
                "Intégration d'une fonctionnalité de drag-and-drop pour une gestion intuitive des tâches, et mise en place de notifications en temps réel pour informer les utilisateurs des mises à jour importantes."
            ],
            "github": "link"
        },
        {
            "id": 15,
            "type": "web",
            "title": "mayara_clothing",
            "technology": ["shopify"],
            "description": [
                "Conception et développement d'une boutique en ligne pour Mayara Clothing, en utilisant Shopify comme plateforme de commerce électronique, personnalisée avec HTML, CSS, et JavaScript pour une identité de marque unique.",
                "Implémentation de fonctionnalités e-commerce avancées, telles que les filtres de produits, les carrousels d'images, et les intégrations de paiement, pour une expérience utilisateur fluide et sécurisée.",
                "Optimisation du site pour le référencement (SEO) et la performance, assurant une navigation rapide et une meilleure visibilité sur les moteurs de recherche."
            ],
            "github": "link"
        },
        {
            "id": 16,
            "type": "software",
            "title": "database_model",
            "technology": ["mysql"],
            "description": [
                "Conception et implémentation d'un modèle de base de données robuste en utilisant MySQL Workbench, optimisé pour les performances et la scalabilité, soutenant les opérations backend de diverses applications.",
                "Développement de schémas de base de données normalisés pour assurer l'intégrité et la cohérence des données, avec des procédures stockées et des triggers pour automatiser les tâches courantes.",
                "Mise en place de stratégies de sauvegarde et de récupération des données, ainsi que de mesures de sécurité pour protéger les informations sensibles contre les accès non autorisés."
            ],
            "github": "link"
        },
        {
            "id": 17,
            "type": "mobile",
            "title": "where_eat_app",
            "technology": ["java", "kotlin", "php"],
            "description": [
                "Développement d'une application mobile multiplateforme pour la découverte de restaurants, en utilisant Java pour Android, Kotlin pour des fonctionnalités spécifiques, et PHP pour le backend.",
                "Intégration de fonctionnalités géolocalisées pour recommander des restaurants aux utilisateurs basés sur leur emplacement actuel, avec des avis, des notes, et des photos.",
                "Conception d'une interface utilisateur intuitive et d'un système de recommandation personnalisé basé sur les préférences et les habitudes alimentaires des utilisateurs."
            ],
            "github": "link"
        },
        {
            "id": 18,
            "type": "web",
            "title": "algo_sort",
            "technology": ["php"],
            "description": [
                "Création de scripts pour démontrer différents algorithmes de tri, implémentée en PHP.",
                "Développement d'interfaces pour permettre aux utilisateurs de visualiser en temps réel le fonctionnement des algorithmes de tri sur des ensembles de données.",
                "Intégration d'options pour comparer les performances des algorithmes, y compris le temps d'exécution et le nombre d'opérations, afin d'éduquer les utilisateurs sur l'efficacité algorithmique."
            ],
            "github": "link"
        },
        {
            "id": 19,
            "type": "network",
            "title": "kubernetes_cluster_k8s",
            "technology": ["kubernetes", "k8s"],
            "description": [
                "Mise en place d'un cluster Kubernetes (k8s) pour orchestrer des conteneurs Docker, facilitant le déploiement, la mise à l'échelle et la gestion d'applications containerisées.",
                "Configuration de services, pods, et volumes persistants pour assurer la haute disponibilité et la persistance des données dans des environnements distribués.",
                "Utilisation de Helm charts pour simplifier le déploiement de packages d'applications, et mise en œuvre de stratégies de mise à jour zéro downtime."
            ],
            "github": "link"
        },
        {
            "id": 20,
            "type": "network",
            "title": "kubernetes_cluster_k3s",
            "technology": ["kubernetes", "k3s"],
            "description": [
                "Déploiement d'un cluster Kubernetes léger (k3s) adapté pour les environnements à ressources limitées, telles que les IoT et les edge computing.",
                "Configuration et gestion du cluster à l'aide de k3s pour offrir les mêmes fonctionnalités que k8s avec une empreinte mémoire et CPU réduite.",
                "Intégration de CI/CD pour automatiser le déploiement et la gestion des applications dans le cluster k3s, assurant une livraison rapide et fiable du code."
            ],
            "github": "link"
        },
        {
            "id": 21,
            "type": "network",
            "title": "monitoring_fonctionnel",
            "technology": ["zabbix"],
            "description": [
                "Implémentation d'une solution de monitoring fonctionnel avec Zabbix pour surveiller en temps réel la performance et la disponibilité des systèmes et des applications.",
                "Configuration de dashboards personnalisés pour afficher les métriques critiques et les alertes, permettant une détection rapide des problèmes et une résolution proactive.",
                "Automatisation de la collecte de données et de la génération de rapports pour fournir des insights opérationnels et soutenir les décisions d'optimisation des performances."
            ],
            "github": "link"
        }
    ];

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
