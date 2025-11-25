import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>Piczen</h2>
                    <p>AI tools to enhance your images with ease.</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-x-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Tools</h4>
                        <a href="#">AI Backgrounds</a>
                        <a href="#">Magic Retouch</a>
                        <a href="#">AI Expand</a>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                    </div>

                    <div>
                        <h4>Support</h4>
                        <a href="#">Contact</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Piczen. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;