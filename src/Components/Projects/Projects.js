import "./Projects.css";
import chiefAsia from "../../assets/pro1.png";  // Import the image from assets folder
import ThreatIQ from "../../assets/pro2.png";

function Projects() {
    return (
        <section className="projects-section">
            <div className="projects-container">
                <h1>My Projects</h1>
                <p className="intro">
                    Here are some of my key projects showcasing my skills in front-end development, UI/UX design, and more. Each project demonstrates practical application of my knowledge in creating user-friendly and functional digital solutions.
                </p>

                <div className="projects-grid">
                    {/* مشروع 1: موقع Chief Asia */}
                    <div className="project-card">
                        <div className="project-image">
                            <img src={chiefAsia} alt="Chief Asia Website" />
                        </div>
                        <h2>Chief Asia Restaurant & E-commerce Website</h2>
                        <p className="description">
                            A full-featured website for a restaurant and online store, built with modern web technologies. Features include menu browsing, online ordering, and responsive design for mobile users.
                        </p>
                        <div className="tech-stack">
                            <span>React</span>
                            <span>HTML/CSS</span>
                            <span>JavaScript</span>

                        </div>
                        <a href="https://chif-asia.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">View Project</a>  {/* Corrected the URL typo */}
                    </div>

                    {/* مشروع 2: ThreatIQ (دليل الأمن السيبراني) */}
                    <div className="project-card">
                        <div className="project-image">
                            <img src={ThreatIQ} alt="ThreatIQ Website" />
                        </div>
                        <h2>ThreatIQ: Comprehensive Cybersecurity Guide</h2>
                        <p className="description">
                            An educational website focused on cybersecurity awareness and protection. It provides insights into cyber threats, protection methods, interactive tools (like password strength checkers), and statistics on daily attacks, threat growth, and breach costs. Designed for Arabic-speaking audiences to learn about digital security.
                        </p>
                        <div className="tech-stack">
                            <span>React</span>
                            <span>HTML/CSS</span>
                            <span>JavaScript</span>

                        </div>
                        <a href="https://engshaam.github.io/ThreatIQ/" target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Projects;