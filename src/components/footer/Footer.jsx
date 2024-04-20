/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import '../footer/footer.css'

function Footer()
{
    return (
        <>
        <h1>
            <footer>
                <a href="#" className="footer_logo">EGATOR</a>
                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <ul className="footer_social">
                    <a href="https://facebook.com"><GrFacebookOption/></a>
                    <a href="https://instagram.com"><FaInstagram/></a>
                    <a href="https://twitter.com"><FiTwitter/></a>
                </ul>
                <div className="footer_copy_right">
                    <small>&copy EAGOR Tutorials. All right reserved</small>
                </div>
            </footer>
        </h1>
        </>
    )
}
export default Footer; 