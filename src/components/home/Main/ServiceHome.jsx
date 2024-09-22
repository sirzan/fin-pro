"use client";
import { Col, Container, Row, Card } from "react-bootstrap";
import { FaQuestion } from "react-icons/fa";

import Image from "next/image";

export default function ServiceHome() {
  return (
    <section className="bg-ms-section">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <span className="badge badge-primary-soft pb-2 mb-3">
              <span className="ic-3x rotation">
                <FaQuestion />
              </span>
            </span>
            <h2>¿Por qué debes elegir nuestros servicios?</h2>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="bg-ms-card">
              <Card.Body>
                <Row className="d-flex align-items-center mb-4">
                  <Col md={3}>
                    <Image
                      src="/images/icon/cooperacion.png"
                      alt="Experiencia y Confianza"
                      title="Experiencia y Confianza"
                      width={70}
                      height={70}
                    />
                  </Col>
                  <Col md={8}>
                    <h3 className="fs-5">
                      <b>Experiencia y Confianza</b>
                    </h3>
                  </Col>
                </Row>
                <p className="mt-3">
                Con años de experiencia en el sector financiero, hemos ayudado a miles de clientes a alcanzar sus metas. Tu confianza es nuestro mayor activo.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="bg-ms-card">
              <Card.Body>
                <Row className="d-flex align-items-center mb-4">
                  <Col md={3}>
                    <Image
                      src="/images/icon/contabilidad.png"
                      alt="Productos Adaptados a Ti"
                      title="Productos Adaptados a Ti"
                      width={70}
                      height={70}
                    />
                  </Col>
                  <Col md={8}>
                    <h3 className="fs-5">
                      <b>Productos Adaptados a Ti</b>
                    </h3>
                  </Col>
                </Row>
                <p className="mt-3">
                Nuestros productos están diseñados para ajustarse a tus necesidades específicas, garantizando que encuentres la solución perfecta para ti
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="bg-ms-card">
              <Card.Body>
                <Row className="d-flex align-items-center mb-4">
                  <Col md={3}>
                    <Image
                      src="/images/icon/cultura-corporativa.png"
                      alt="Atención Personalizada"
                      title="Atención Personalizada"
                      width={70}
                      height={70}
                    />
                  </Col>
                  <Col md={8}>
                    <h3 className="fs-5">
                      <b>Atención Personalizada</b>
                    </h3>
                  </Col>
                </Row>
                <p className="mt-3">
                Creemos en la importancia de una atención al cliente excepcional. Nuestro equipo está disponible para guiarte en cada paso del proceso.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="bg-ms-card">
              <Card.Body>
                <Row className="d-flex align-items-center mb-4">
                  <Col md={3}>
                    <Image
                      src="/images/icon/calculo.png"
                      alt="Proceso Rápido y Sencillo"
                      title="Proceso Rápido y Sencillo"
                      width={70}
                      height={70}
                    />
                  </Col>
                  <Col md={8}>
                    <h3 className="fs-5">
                      <b>Proceso Rápido y Sencillo</b>
                    </h3>
                  </Col>
                </Row>
                <p className="mt-3">
                Con un proceso de solicitud simplificado, puedes obtener la ayuda financiera que necesitas de manera rápida y sin complicaciones.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="bg-ms-card">
              <Card.Body>
                <Row className="d-flex align-items-center mb-4">
                  <Col md={3}>
                    <Image
                      src="/images/icon/economico.png"
                      alt="Transparencia Total"
                      title="Transparencia Total"
                      width={70}
                      height={70}
                    />
                  </Col>
                  <Col md={8}>
                    <h3 className="fs-5">
                      <b>Transparencia Total</b>
                    </h3>
                  </Col>
                </Row>
                <p className="mt-3">
                Nos enorgullece ofrecer una comunicación clara y transparente. No hay sorpresas ocultas, solo soluciones claras y efectivas.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
