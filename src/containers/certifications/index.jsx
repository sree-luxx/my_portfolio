import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.scss";

import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const certData = {
  Courses: [
    { title: "Java Programming", cert: "/certs/nptel_course.jpg" },
    { title: "Machine Learning", cert: "/certs/deeplearning_course.png" },
    { title: "Metaverse from Coursera", cert: "/certs/meta_course.png" },
    { title: "Python", cert: "/certs/python_course.png" },
    
  ],
  Workshop: [
    { title: "MongoDB 101 workshop", cert: "/certs/gfg.png" },
    { title: "Web Development", cert: "/certs/web_workshop.png" },
    { title: "#D printing", cert: "/certs/3d_workshop.png" },
  ],
  Participation: [
    { title: "Symposium from CIT", cert: "/certs/cit_part.jpg" },
    { title: "Amazon's Mission GraHAQ", cert: "/certs/amazon_part.png" },
    { title: "Viksit Bharat", cert: "/certs/viksit_part.jpg" },
    { title: "Paper Presentation at Veltech", cert: "/certs/veltech_participation.jpg" },
  ],
  Internship: [
    { title: "Python codsoft internship", cert: "/certs/codsoft_internship.png" },
  ],
};

const Certifications = () => {
  return (
    <section id="cert" className="cert">
      <PageHeaderContent
        headerText="My Certifications"
        icon={<BsInfoCircleFill size={40} />}
      />

      {Object.entries(certData).map(([category, certs], index) => (
        <div key={index} className="cert-section">
          <h2 className="cert-category">{category}</h2>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="swiper-container"
          >
            {certs.map((item, idx) => (
              <SwiperSlide key={idx} className="swiper-slide">
                <img src={item.cert} alt={item.title} />
                <p className="cert-title">{item.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
