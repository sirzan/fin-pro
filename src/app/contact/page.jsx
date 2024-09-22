
import { Container, Row, Col } from "react-bootstrap";
import { HeaderSection } from "app/components/shared/Header/HeaderSection";
import {
  FaMapMarkedAlt,
  FaEnvelopeOpenText,
  FaMobileAlt,
} from "react-icons/fa";


import { FiMail } from "react-icons/fi";

import FormContact from "app/components/contact/FormContact";


export const metadata = {
  title: "Contacto - FinPro",
  description: "Estamos aquí para ayudarte. Contáctanos para obtener más información sobre nuestros servicios financieros y cómo podemos asistirte.",
  openGraph: {
    title: "Contacto - FinPro",
    description: "¿Tienes preguntas? Estamos disponibles para responderte y ofrecerte la información que necesitas sobre nuestros servicios.",
    url: "https://www.finpro.com/contacto",
    image: "https://www.finpro.com/contacto-image.jpg",
  },
};

export default function Contact() {

  return (
    <>

      <HeaderSection title="Contacto" seccion="Contacto" />
      <section>
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <FaMapMarkedAlt className="icon-size" />
              <h4>
                <b>Dirección:</b>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maxime.
              </p>
            </Col>
            <Col md={4}>
              <FaEnvelopeOpenText className="icon-size" />
              <h4>
                <b>Correo Electrónico:</b>
              </h4>
              <a href="mailto:info@fin-pro.com">
                info@fin-pro.com
              </a>
            </Col>
            <Col md={4}>
              <FaMobileAlt className="icon-size" />
              <h4>
                <b>Teléfono:</b>
              </h4>
              <a href="tel:+00000000000">+00 000 000 000</a>
            </Col>
          </Row>
          <Row className="justify-content-center mb-5 text-center">
            <Col md={8}>
              <span className="badge badge-primary-soft pb-2 mb-3">
                <span className="ic-3x rotation">
                  <FiMail />
                </span>
              </span>
              <h2 className="mt-4">
              Contáctanos y Resuelve tus Dudas
              </h2>
              <p className="lead">
              En FinPro, valoramos tu opinión y estamos aquí para asistirte en todo lo que necesites. Si tienes preguntas sobre nuestros productos, deseas obtener más información, o necesitas asesoría personalizada, no dudes en ponerte en contacto con nosotros. Nuestro equipo está listo para ayudarte y se compromete a responder tus consultas de manera rápida y efectiva.
              </p>
            </Col>
          </Row>

          <Row>
         <FormContact></FormContact>
          </Row>

        </Container>
      </section>
    </>
  );
}
