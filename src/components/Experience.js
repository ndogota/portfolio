import React from "react";

import "./Experience.css"

const Experience = () => {
    return (
        <div className="experience" id="CAREER">
            <div className="content">
                <div className="experienceWrapper">
                    <div className="titleSection">
                        <h2>3//CAREER</h2>
                    </div>
                    <div className="experienceContent">
                        <div className="experienceItem ">
                            <h1>Education</h1>
                        </div>
                        <div className="experienceItem">
                            <div>
                                <h4>Master's Degree - System and Network Architecture Engineer</h4>
                                <p className="informationItem">ETNA, IONIS Education Group - Campus Paris-Ivry (oct 2021 – oct 2023)</p>
                                <p>- Designed and deployed secure network infrastructures for enterprise environments.</p>
                                <p>- Managed system integration projects while adhering to time, budget, and quality constraints.</p>
                            </div>

                            <div>
                                <h4>Bachelor's Degree - Web and Mobile Project Manager</h4>
                                <p className="informationItem">ETNA, IONIS Education Group - Campus Paris-Ivry (oct 2020 – oct 2021)</p>
                                <p>- Developed web and mobile applications using the latest technologies and frameworks.</p>
                                <p>- Ensured application quality and performance through testing and user feedback.</p>
                            </div>

                            <div>
                                <h4>Accelerated Preparatory Year</h4>
                                <p className="informationItem">ETNA, IONIS Education Group - Campus Paris-Ivry (oct 2019 – oct 2020)</p>
                                <p>- Participated in team-based software development projects using agile methodologies.</p>
                                <p>- Acquired skills in computer programming, data analysis, and database management.</p>
                            </div>
                        </div>
                        <div className="experienceItem ">
                            <h1>Experience</h1>
                        </div>
                        <div className="experienceItem ">
                            <div>
                                <h3>Full-Stack Developer</h3>
                                <p className="informationItem">EarnYourStream, Paris (Independent) (oct 2023 → present)</p>
                                <p>- Developed and managed plugins/servers integrating the TikTok API, enabling real-time interactions between the game and viewer actions.</p>
                                <p>- Monitored and optimized server performance using Kubernetes, improving service availability and scalability.</p>
                            </div>
                            <div>
                                <h4>Information Security Officer Assistant</h4>
                                <p className="informationItem">Conseil départemental de la Seine-Saint-Denis, Bobigny (oct 2021 → oct 2023)</p>
                                <p>- Conducted regular web application security audits using OWASP ZAP.</p>
                                <p>- Deployed dashboards in Splunk to monitor key security indicators.</p>
                                <p>- Reduced threat response time by 40% (from 6 hours to 3.5 hours) through effective SIEM incident management.</p>
                            </div>

                            <div>
                                <h4>Full-Stack Developer</h4>
                                <p className="informationItem">Mayara Clothing, Lyon (oct 2020 → oct 2021)</p>
                                <p>- Increased conversion rates by 25% through UX optimization on the payment page.</p>
                                <p>- Developed custom payment modules and managed stock/orders.</p>
                            </div>

                            <div>
                                <h4>Web Developer/Integrator</h4>
                                <p className="informationItem">OwnLeadr, Lyon (april 2020 → oct 2020)</p>
                                <p>- Built and integrated responsive websites.</p>
                                <p>- Boosted organic traffic by 50% through SEO optimization and high performance scores (90+ on Google Lighthouse).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
