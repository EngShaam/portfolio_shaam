import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <section className="home-hero">
            <div className="hero-content">
                <h1 className="name">Shaam Emad Almusili</h1>
                <h2 className="title">Information Technology Engineer</h2>
                <h3 className="specialty"> Cybersecurity Specialist</h3>

                <p className="intro">
                    Bridging Design and Security in the Digital Realm.
                    <br />
                    UI/UX Innovator | Front-End Developer | Cybersecurity Enthusiast |  Jeddah - Damascus
                </p>

                <div className="cta-buttons">
                    <Link to="/projects" className="btn primary">
                        View Projects
                    </Link>
                    <Link to="/contact" className="btn secondary">
                        Get in Touch
                    </Link>
                </div>
            </div>

            <div className="background-overlay"></div>
        </section>
    );
}

export default Home;