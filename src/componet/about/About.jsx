import React from 'react';
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id={"about"}>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className={"container about__container"}>
                <div className={"about__me"}>
                    <div className={"about__me-image"}>
                        <img src={ME} alt={"About Image"} />
                    </div>
                </div>
                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={'about__card'}>
                            <FaAward className={"about__icon"} />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className={'about__card'}>
                            <FiUsers className={"about__icon"} />
                            <h5>Clients</h5>
                            <small>20+ Clients</small>
                        </article>
                        <article className={'about__card'}>
                            <VscFolderLibrary className={"about__icon"} />
                            <h5>Projects</h5>
                            <small>10+ Projects</small>
                        </article>
                    </div>
                    <p>Welcome to My Portfolio
                    Hello and welcome to my Portfolio!
                    My name is Sufiyan Ahmad and I am making this portfolio not only to display the works that I have done in past years, but also to show how my skills has improved throughout the quarter.
                    At the beginning of this course I was not the most confident in my coding skills, in fact I always dreaded having to write codes.
                    I made it a goal to become a better software developer and find a better style that worked for me instead of not trying.
                    I am making this portfolio in order to show that I have finally reached my goals, and have grown in to a much more confident developer than I was before</p>
                    <a href={"contact"} className={"btn btn-primary"}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About