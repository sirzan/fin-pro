
import { Container, Row, Col } from "react-bootstrap";
import { HeaderSection } from "app/components/shared/Header/HeaderSection";
import FaqAccordion from "app/components/Faq/FaqAccordion";

export const metadata = {
  title: "Preguntas Frecuentes - FinPro",
  description: "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios financieros, préstamos, tarjetas de crédito y más.",
  openGraph: {
    title: "Preguntas Frecuentes - FinPro",
    description: "¿Tienes dudas sobre nuestros productos financieros? Aquí tienes respuestas a las preguntas más frecuentes que nos hacen nuestros clientes.",
    url: "https://www.finpro.com/faq",
    image: "https://www.finpro.com/faq-image.jpg",
  },
};

export default function Faq() {
 
  return (
    <>
      <HeaderSection title="FAQ" seccion="FAQ" />

      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Preguntas Frecuentes (FAQ)</h2>
      <FaqAccordion></FaqAccordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}
