import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-brand">
                    <h2>Piczen</h2>
                    <p>AI tools to enhance your images with ease.</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-x-twitter"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div class="footer-links">
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
            <div class="footer-bottom">
                <p>© 2025 Piczen. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;