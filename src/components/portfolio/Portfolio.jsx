import portfolioImage1 from "../../assets/portfolio1.jpg";
import portfolioImage2 from "../../assets/portfolio2.jpg";
import portfolioImage3 from "../../assets/portfolio3.jpg";
import portfolioImage4 from "../../assets/portfolio4.jpg";
import portfolioImage5 from "../../assets/portfolio5.png";
import portfolioImage6 from "../../assets/portfolio6.jpg";
import "../portfolio/portfolio.css";


function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={portfolioImage1} alt="" />
            </div>
            <h3>Title</h3>
            <div className="portfolio_item-cta">
              <a href="" className="btn">
                Github
              </a>
              <a href="" className="btn btn-primary" target="_black">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={portfolioImage2} alt="" />
            </div>
            <h3>Title</h3>
            <div className="portfolio_item-cta">
              <a href="" className="btn">
                Github
              </a>
              <a href="" className="btn btn-primary" target="_black">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={portfolioImage3} alt="" />
            </div>
            <h3>Title</h3>
            <div className="portfolio_item-cta">
              <a href="" className="btn">
                Github
              </a>
              <a href="" className="btn btn-primary" target="_black">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={portfolioImage4} alt="" />
            </div>
            <h3>Title</h3>
            <div className="portfolio_item-cta">
              <a href="" className="btn">
                Github
              </a>
              <a href="" className="btn btn-primary" target="_black">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={portfolioImage5} alt="" />
            </div>
            <h3>Title</h3>
            <div className="portfolio_item-cta">
              <a href="" className="btn">
                Github
              </a>
              <a href="" className="btn btn-primary" target="_black">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={portfolioImage6} alt="" />
            </div>
            <h3>Title</h3>
            <div className="portfolio_item-cta">
              <a href="" className="btn">
                Github
              </a>
              <a href="" className="btn btn-primary" target="_black">
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
export default Portfolio;
