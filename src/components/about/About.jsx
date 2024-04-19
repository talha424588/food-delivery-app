import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { RiFolderChartLine } from "react-icons/ri";
import "../about/about.css";
function About() {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={Me} alt="" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about__card">
                <LuUsers className="about__icon" />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className="about__card">
                <RiFolderChartLine className="about__icon" />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              optio necessitatibus, debitis aspernatur inventore eveniet enim
              iusto eaque quia ut. Itaque fugit illum dolores repellendus a
              consectetur blanditiis, iure reprehenderit.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
