import "./Contact.css";

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h1>Contact Me</h1>
                <p className="intro">
                    Feel free to reach out for collaborations, job opportunities, or any inquiries.
                    I'm available in Jeddah, Saudi Arabia and Damascus, Syria.
                </p>

                {/* بطاقة واحدة كبيرة أنيقة مثل مشاريعك */}
                <div className="contact-card">
                    <h2>Communication</h2>

                    <ul className="contact-list">
                        <li>
                            <strong>Email:</strong>
                            <a href="mailto:shaam1422.a@gmail.com">shaam1422.a@gmail.com</a>
                        </li>
                        <li>
                            <strong>Phone (Saudi Arabia):</strong>
                            <a href="tel:+966565232155">+966 565 232 155</a>
                        </li>
                        <li>
                            <strong>Phone (Syria):</strong>
                            <a href="tel:+963984079498">+963 984 079 498</a>
                        </li>

                        <li>
                            <strong>Instagram:</strong>
                            <a href="https://www.instagram.com/eng.shaam" target="_blank" rel="noopener noreferrer">
                                @eng.shaam
                            </a>
                        </li>
                        <li>
                            <strong>LinkedIn:</strong>
                            <a href="https://www.linkedin.com/in/shaam-almouselly" target="_blank" rel="noopener noreferrer">
                                Shaam Almouselly
                            </a>
                        </li>
                        <li>
                            <strong>GitHub:</strong>
                            <a href="https://github.com/engshaam" target="_blank" rel="noopener noreferrer">
                                engshaam
                            </a>
                        </li>
                        <li>
                            <strong>Location:</strong>
                            Jeddah, Saudi Arabia / Damascus, Syria
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;