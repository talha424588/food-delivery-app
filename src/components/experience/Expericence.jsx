import { BsFillPatchCheckFill } from "react-icons/bs";
import "../experience/experience.css";
function Experience() {
  return (
    <>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience_container">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience_backend">
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>Laravel</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className='experience_details_icon' />
                <div>
                  <h4>Symfony</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="experience_details_icon" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Experience;
