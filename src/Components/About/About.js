import { Link } from "react-router-dom";
import "./About.css";  // Or include it in a general CSS if preferred

function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                {/* Personal photo or logo – choose a cyber-style one */}
              
                <div className="about-content">
                    <h1>About Me</h1>
                    <p className="bio">
                        I am Shaam Emad Almusili, a fifth-year student in Information Technology Engineering at the Syrian Virtual University. I hold Syrian nationality and reside in Jeddah, Kingdom of Saudi Arabia, with the ability to travel between Jeddah and Damascus. I have a strong desire to enter the job market to apply my practical knowledge in the fields of design, programming, and cybersecurity.
                        <br /><br />
                        I excel in effective communication, working under pressure, and adapting to team environments. I always strive to provide added value by improving performance and increasing efficiency, and I seek opportunities to gain practical experience in a professional setting.
                    </p>

                    <h2>Education</h2>
                    <ul className="education-list">
                        <li>
                            <strong>Bachelor's in Information Technology Engineering</strong> - Syrian Virtual University (2021 - Present)
                        </li>
                    </ul>

                    <h2>Experience</h2>
                    <ul className="experience-list">
                        <li>Mobile App Programming - Arab Center for Qualification and Training, Damascus (2024/08 - 2024/10)</li>
                        <li>User Interface Design - Arab Center for Qualification and Training, Damascus (2024/08 - 2024/10)</li>
                        <li> Training on the duties of the principal and supervisor - Future Private Schools, Jeddah (September 2022 - January 2023)</li>
                        <li>Teaching Computer Science (Primary and Secondary) - Al-Mustaqbal Al-Ahliya Schools, Jeddah (2022/09 - 2023/01)</li>
                        <li>Cybersecurity Course - New Horizons Institute, Damascus (2025/01 - 2025/10)  {/* Note: Dates in CV appear future-oriented, possibly a typo, adjust if needed */}</li>
                    </ul>

                    <h2>Skills</h2>
                    <div className="skills-grid">
                        <span>User Interface Design (UI/UX)</span>
                        <span>Front End Programming</span>
                        <span>Figma</span>
                        <span>Canva, Photoshop, Illustrator</span>
                        <span>Microsoft Office</span>
                        <span>Effective Communication and Teamwork</span>
                        <span>Flexibility and Adaptation</span>
                        <span>Time Management and Organization</span>
                        <span>Data Analysis</span>
                        <span>Teaching Computer Science</span>
                    </div>

                    <h2>Languages</h2>
                    <ul className="languages-list">
                        <li>Arabic (Native)</li>
                        <li>English (Level B2 - Upper Intermediate)</li>
                    </ul>

                    <div className="cta">
                        <Link to="/contact" className="btn">Contact Me</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;