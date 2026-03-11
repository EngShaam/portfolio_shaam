import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    SH_AL<span style={{ color: "#d4af37" }}></span>
                </Link>
            </div>

            <div className={`nav-links ${isOpen ? "active" : ""}`}>
                <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""} onClick={() => setIsOpen(false)}>Projects</Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setIsOpen(false)}>Contact</Link>
            </div>

            <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;