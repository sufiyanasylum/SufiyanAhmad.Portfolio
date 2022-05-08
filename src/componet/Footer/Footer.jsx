import React from 'react';
import './Footer.css'
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
    return (
        <footer>
            <a href={"#"} className={"footer__logo"}>Sufiyan Ahmad</a>
            <ul className={"permalinks"}>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experiences"}>Experiences</a></li>
                <li><a href={"#services"}>Services</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#contact"}>Contact</a></li>
            </ul>

            <div className={"footer__socials"}>
                <a href={"https://github.com/sufiyanasylum"} target={"_blank"}><FaGithub /></a>
                <a href={"https://www.instagram.com/sayyed_sufiyan_hashmi/"} target={"_blank"}><GrInstagram /></a>
                <a href={"www.linkedin.com/in/sufyan-ahmad-148bb1218"} target={"_blank"}><BsLinkedin /></a>
            </div>

            <div className={"footer__copyright"}>
                <small>&copy;  Sufiyan Ahmad. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer