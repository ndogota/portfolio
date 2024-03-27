import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact" id="CONTACT">
            <div className="content">
                <div className="titleSection">
                    <h2>4//CONTACT</h2>
                </div>
                <div className="contactContent">
                    <div className="contactItem">
                        <p>Pour toute discussion ou demande d'informations supplémentaires, vous pouvez m'envoyer un email ou me retrouver sur LinkedIn. N'hésitez pas à prendre contact !</p>
                        <p>Mail : nicolae.dogotaru@gmail.com</p>
                        <div className="socialLogoWrapper">
                            <a className="socialLogoLink" href="https://www.linkedin.com/in/nicolaedogotaru/" target="_blank" rel="noreferrer">
                                <FaLinkedin className="socialLogo"/>
                            </a>
                            <a className="socialLogoLink" href="https://github.com/ndogota" target="_blank" rel="noreferrer" >
                                <FaGithubSquare className="socialLogo" />
                            </a>
                        </div>
                        <p>Pour télecharger mon CV vous pouvez cliquer <a href="https://github.com/ndogota" target="_blank" rel="noreferrer"><span style={{textDecoration:"underline", fontWeight: "bold"}}>ici</span></a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
