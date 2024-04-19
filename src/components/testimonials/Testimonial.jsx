import client1 from "../../assets/avatar1.jpg";
import client2 from "../../assets/avatar2.jpg";
import client3 from "../../assets/avatar3.jpg";
import client4 from "../../assets/avatar4.jpg";
import "../testimonials/testimonial.css";

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonial() {
  const testimonialsData = [
    {
        clientAvatar: client1,
        name: "Ash Achiever",
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi tempore aut, voluptate accusantium obcaecati ipsa ad repellendus dolorum aliquam labore architecto maiores doloremque itaque maxime? Aspernatur hic perferendis repellat?",
    },
    {
      clientAvatar: client2,
      name: "John Achiever",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi tempore aut, voluptate accusantium obcaecati ipsa ad repellendus dolorum aliquam labore architecto maiores doloremque itaque maxime? Aspernatur hic perferendis repellat?",
    },
    {
      clientAvatar: client3,
      name: "Alex Achiever",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi tempore aut, voluptate accusantium obcaecati ipsa ad repellendus dolorum aliquam labore architecto maiores doloremque itaque maxime? Aspernatur hic perferendis repellat?",
    },
    {
      clientAvatar: client4,
      name: "Emma Achiever",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi tempore aut, voluptate accusantium obcaecati ipsa ad repellendus dolorum aliquam labore architecto maiores doloremque itaque maxime? Aspernatur hic perferendis repellat?",
    },
  ];
  return (
    <>
      <section id="testimonials">
        <h5>Review From Clients</h5>
        <h2>testimonials</h2>
        <Swiper className="container testominial_container" 
        modules={[Pagination]}
        Autoplay
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}>
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client_avatar">
                <img src={testimonial.clientAvatar} alt="" />
              </div>
              <div className="testominial_card-content">
                <h5>John Achiever</h5>
                <small className="client_review">{testimonial.review}</small>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
export default Testimonial;
