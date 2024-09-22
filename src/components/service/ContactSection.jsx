
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { BiMailSend, BiPhoneCall } from 'react-icons/bi'


export const ContactSection = () => {
  return (
    <section className="bg-ms-section">
    <Container>
      <Row className="align-items-center">
        <Col md={8}>
          <h3 className="fw-semibold">¡Toma el Control de Tu Futuro Financiero Hoy!</h3>
          <p>
          No esperes más para dar el primer paso hacia una vida financiera más segura y exitosa. En FinPro, estamos listos para ayudarte a alcanzar tus metas. 
          </p>
        </Col>
        <Col md={4}>
          <Link href="/contact" className="btn btn-primary btn-lg me-3">
            <BiMailSend className="fs-3" /> Contáctenos
          </Link>
          <a href="tel:+00000000000" className="btn btn-outline-light btn-lg">
          <BiPhoneCall className="fs-3" /> Llámenos
          </a>
      
        </Col>
      </Row>
    </Container>
  </section>
  )
}