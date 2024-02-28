import "./Contact.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="content">
                <div className="titleSection">
                    <h2>4//contact</h2>
                </div>
                <div className="contactContent">
                    <div className="contactItem">
                        <h2>En recherche d'opportunités</h2>
                    </div>
                    <div className="contactItem">
                        <p>Pour toute discussion ou demande d'informations supplémentaires, vous pouvez m'envoyer un email ou me retrouver sur LinkedIn. N'hésitez pas à prendre contact !</p>
                        <p>Mail : nicolae.dogotaru@gmail.com</p>
                        <div className="socialLogoWrapper">
                            <FaLinkedin className="socialLogo"/>
                            <FaGithubSquare className="socialLogo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
