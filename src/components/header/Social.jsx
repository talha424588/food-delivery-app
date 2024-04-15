import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Social() {
  return (
    <>
      <div className="header_socials">
      <a href="https://www.linkedin.com/feed/" target="_black"><BsLinkedin/></a>
      <a href="https://github.com/" target="_black"><FaGithubSquare/></a>
      <a href="https://www.facebook.com/" target="_black"><FaFacebookSquare/></a>
      </div>
    </>
  );
}
export default Social;
