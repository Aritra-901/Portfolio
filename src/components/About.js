import React from 'react';
import { SiExpress } from "react-icons/si";
import './About.css';

const About = () => {
    const techIcons = [
        { icon: 'fab fa-react', color: '#61dafb', label: 'React' },
        { icon: 'fab fa-node', color: '#68A063', label: 'Node.js' },
        { icon: 'fab fa-python', color: '#3776AB', label: 'Python' },
        { icon: 'fas fa-database', color: '#13AA52', label: 'MongoDB' },
        { icon: 'fab fa-docker', color: '#2496ED', label: 'Docker' },
        { icon: 'fab fa-github', color: '#ffffff', label: 'GitHub' },
        { icon: 'fab fa-git-alt', color: '#F1502F', label: 'Git' },
        { icon: 'fab fa-js-square', color: '#F7DF1E', label: 'JavaScript' },
        { icon: 'fab fa-html5', color: '#E34C26', label: 'HTML5' },
        { icon: 'fab fa-css3-alt', color: '#1572B6', label: 'CSS3' },
        { icon: 'fab fa-npm', color: '#CB3837', label: 'NPM' },
        { icon: 'fab fa-bootstrap', color: '#7952B3', label: 'Bootstrap' },
        { icon: 'express', color: '#ffffff', label: 'Express' },
        { icon: 'fab fa-figma', color: '#F24E1E', label: 'Figma' },
        { icon: 'fas fa-code', color: '#007ACC', label: 'VS Code' },
        { icon: 'fab fa-linux', color: '#FCC624', label: 'Linux' },
        { icon: 'fas fa-fire', color: '#FFCA28', label: 'Firebase' },
        { icon: 'fab fa-java', color: '#007396', label: 'Java' },
        { icon: 'fab fa-rust', color: '#CE422B', label: 'Rust' }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <div className="tech-scatter-container">
                            {techIcons.map((tech, index) => (
                                <div
                                    key={index}
                                    className="floating-icon"
                                    style={{
                                        '--position': index,
                                        '--delay': `${index * 0.05}s`,
                                        '--duration': `${3 + (index % 3)}s`
                                    }}
                                >
                                    <div className="icon-box" title={tech.label}>
                                        {tech.icon === "express" ? (
                                            <SiExpress size={26} color={tech.color} />
                                        ) : (
                                            <i className={tech.icon} style={{ color: tech.color }}></i>
                                        )}
                                    </div>
                                    <span className="icon-name">{tech.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-text">
                        <h2 className="about-title">About Me</h2>
                        <p className="about-description">
                            I'm a passionate developer with expertise in creating robust, scalable
                            applications. My journey in software development has equipped me with a deep
                            understanding of both frontend and backend technologies.
                        </p>
                        <p className="about-description">
                            I believe in writing clean, maintainable code and creating user experiences that
                            are both beautiful and functional. Every project is an opportunity to learn,
                            innovate, and push boundaries.
                        </p>
                        <div className="about-stats">
                            <div className="stat">
                                <h3>9+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat">
                                <h3>3+</h3>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
