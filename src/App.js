import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Expericence";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Service from "./components/service/Service";
import Testimonial from "./components/testimonials/Testimonial";
import "./index.css";
function App()
{
    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
        <About></About>
        <Experience></Experience>
        <Service></Service>
        <Portfolio></Portfolio>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
        </>
    )
}
export default App;