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
                        <p>For any discussion or additional information, you can send me an email or find me on LinkedIn. Feel free to get in touch!</p>
                        <p>Email: nicolae.dogotaru@gmail.com</p>
                        <div className="socialLogoWrapper">
                            <a className="socialLogoLink" href="https://www.linkedin.com/in/nicolaedogotaru/" target="_blank" rel="noreferrer">
                                <FaLinkedin className="socialLogo"/>
                            </a>
                            <a className="socialLogoLink" href="https://github.com/ndogota" target="_blank" rel="noreferrer" >
                                <FaGithubSquare className="socialLogo" />
                            </a>
                        </div>
                        <p>To download my resume, you can click <a href="/cv.pdf" target="_blank" rel="noreferrer"><span style={{textDecoration:"underline", fontWeight: "bold"}}>here</span></a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
