"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './TestimonialSlider.module.css'; // Importa el módulo CSS

const testimonials = [
  {
    name: "Juan Pérez",
    feedback: "¡Excelente servicio! Me ayudaron a desarrollar mi app y el resultado fue increíble.",
    role: "CEO de Empresa X",
    image: "/images/testimonials/man.jpg",
  },
  {
    name: "María López",
    feedback: "El equipo de Multiverse es muy profesional y atento. 100% recomendado.",
    role: "Gerente de Marketing",
    image: "/images/testimonials/fm.jpg",
  },
  {
    name: "Carlos García",
    feedback: "Me encantó trabajar con ellos. Cumplieron con todos los plazos y expectativas.",
    role: "Fundador de Startup Y",
    image: "/images/testimonials/man.jpg",
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={styles.testimonialSlider}>
      <h2 className="text-center my-4">Lo que dicen nuestros clientes</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.testimonialItem} key={index}>
            <div className={styles.testimonialContent}>
              <img src={testimonial.image} alt={testimonial.name} className={styles.testimonialImage} />
              <p className={styles.testimonialFeedback}>"{testimonial.feedback}"</p>
              <h4 className={styles.testimonialName}>{testimonial.name}</h4>
              <p className={styles.testimonialRole}>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
