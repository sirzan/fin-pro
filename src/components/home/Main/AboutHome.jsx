import { Col, Container, Row } from "react-bootstrap";
import { FaQuestion } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";

export default function AboutHome() {
  return (
    <section>
    <Container>
      <Row>
        <Col md={6} className="p-3">
          <Image
            src="/images/about/finance-about.png"
            alt="Experiencia y Compromiso a tu Servicio"
            title="Experiencia y Compromiso a tu Servicio"
            width={628}
            height={523.33}
            className="img-fluid"
          />
        </Col>
        <Col md={5} className="p-4">
          <span className="badge badge-primary-soft pb-2 mb-3">
            <span className="ic-3x rotation">
              <FaQuestion />
            </span>
          </span>
          <h2>Experiencia y Compromiso a tu Servicio</h2>
          <p className="lead" align="jusfity">
          En FinPro, estamos comprometidos en ofrecer productos financieros que se ajustan a tus necesidades. Nuestro equipo de expertos trabaja cada día para brindarte soluciones seguras y transparentes, facilitando el camino hacia un futuro financiero estable.
          </p>
          <div className="d-flex flex-wrap justify-content-start">
            <div className="mb-3 me-4">
              <div className="d-flex align-items-center">
                <div className="badge-primary-soft rounded p-1">
                  {" "}
                  <IoCheckmarkSharp />
                </div>
                <p className="mb-0 ms-3">Experiencia Comprobada</p>
              </div>
            </div>
            <div className="mb-3 me-4">
              <div className="d-flex align-items-center">
                <div className="badge-primary-soft rounded p-1">
                  {" "}
                  <IoCheckmarkSharp />
                </div>
                <p className="mb-0 ms-3">Atención Personalizada</p>
              </div>
            </div>
            <div className="mb-3 me-4">
              <div className="d-flex align-items-center">
                <div className="badge-primary-soft rounded p-1">
                  {" "}
                  <IoCheckmarkSharp />
                </div>
                <p className="mb-0 ms-3">Seguridad y Transparencia</p>
              </div>
            </div>
            <div className="mb-3 me-4">
              <div className="d-flex align-items-center">
                <div className="badge-primary-soft rounded p-1">
                  {" "}
                  <IoCheckmarkSharp />
                </div>
                <p className="mb-0 ms-3">Innovación Constante</p>
              </div>
            </div>
          </div>
          <Link href="/about" className="btn btn-outline-primary">
            Leer más
          </Link>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
