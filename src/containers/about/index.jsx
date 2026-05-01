import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss'
import { DiHtml5, DiAndroid } from 'react-icons/di'
import {  FaDatabase, FaDev } from 'react-icons/fa'


const jobSummary = `Hey! I'm Sree Lakshmi, a Computer Science and Business Systems Engineering student who loves building cool things with tech. I'm into full-stack development, UI/UX design, and Flutter app development. I enjoy working on real-world problems, learning new tools, and teaming up with others to bring ideas to life. Whether it's coding, designing, or exploring new tech like AI and ML, I'm always excited to grow and make a positive impact. Let’s connect and create something amazing together! `

const personalDetails = [
    {
        label: "Name",
        value: "Sree Lakshmi M.D"
    },
    {
        label: "Age",
        value: "19",
    },
    {
        label: "Email",
        value: "sreelakshmipallipita@gmail.com"
    }

]
const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}

                    >

                        <h3>Full Stack(Mern Stack)</h3>
                        <p>{jobSummary}</p>
                    </Animate>


                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}

                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__serviceWrapper">
                <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)',
                        }}
                        end={{
                            transform: 'translatex(0px)',
                        }}

                    >
                    <div className="about__content__serviceWrapper__innerContent">
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiHtml5 size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                    </Animate>

                </div>
            </div>
        </section>
    )
}
export default About;