import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import "../contact/contact.css";
function Contact() {
  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contant_container">
          <div className="contact_options">
            <article className="contact_option">
                <MdOutlineMailOutline className="contact_option-icon"/>
                <h4>Email</h4>
                <h5>dummy@gmail.com</h5>
                <a href="mailto:dummy@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact_option">
            <RiMessengerLine className="contact_option-icon"/>
                <h4>Messenger</h4>
                <h5>eagerToturial</h5>
                <a href="https://google.com" target="_blank">Send a message</a>
            </article>
            <article className="contact_option">
                <IoLogoWhatsapp className="contact_option-icon"/>
                <h4>Whatapp</h4>
                <h5>+92 203 4765927</h5>
                <a href="https://api.whatsapp.com/send?phone+03024765927" target="_blank">Send a message</a>
            </article>
          </div>
          <form action="">
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <input type="email" name="email" placeholder="Enter Your Email" required />
            <textarea name="message" id="message" placeholder="Your Message Here" cols="30" rows="10" required></textarea>
            <button className="btn btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact;
