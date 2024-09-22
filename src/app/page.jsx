import Slider from "app/components/home/Slider/Slider";
import Link from "next/link";
import { Col, Container, Row, Card } from "react-bootstrap";
import TestimonialSlider from "app/components/home/Testimonios/TestimonialSlider";
import ServiceHome from "app/components/home/Main/ServiceHome";
import ObjectHome from "app/components/home/Main/ObjectHome";
import AboutHome from "app/components/home/Main/AboutHome";

export const metadata = {
  title: "FinPro - Tu Socio Financiero",
  description: "Bienvenido a FinPro, donde transformamos tus sueños financieros en realidad con soluciones personalizadas y asesoría experta.",
  openGraph: {
    title: "FinPro - Tu Socio Financiero",
    description: "Explora nuestros servicios financieros, desde préstamos personales hasta consultoría especializada. ¡Contáctanos y comienza tu viaje hacia la libertad financiera!",
    url: "https://www.finpro.com", 
    image: "https://www.finpro.com/og-image.jpg", // URL de una imagen 
    site_name: "FinPro",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Slider></Slider>

      <ObjectHome></ObjectHome>

      <AboutHome></AboutHome>

      <ServiceHome></ServiceHome>

      <TestimonialSlider></TestimonialSlider>
    </>
  );
}
