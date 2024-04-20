import CTA from "./CTA";
import me from '../../assets/me.png'
import Social from "./Social";
import '../header/header.css';
function Header()
{
    return (
        <>
        <header className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Hajia</h1>
            <h5 className="text_light">Full Stack Developer</h5>
            <CTA/>
            <Social/>
            <div className="me">
                <img src={me} alt="Profile" />
            </div>
            <a href="#contact" className="scroll_down">scroll down</a>
        </header>
        </>
    )
}
export default Header;