import { Col, Container, Row } from "react-bootstrap";

import {
    IoRibbonOutline,
    IoTrophyOutline,
    IoEarth,

  } from "react-icons/io5";
export default function ObjectHome() {
  return (
    <section>
    <Container>
      <Row className="align-items-center">
        <Col md={4} className="pb-2">
          <div className="card-ms">
            <div className="mx-4 my-4">
              <IoRibbonOutline className="icon-header" />
              <h3>VISIÓN</h3>
              <p className="mb-0">
              Ser la entidad financiera líder en ofrecer productos personalizados que se adapten a las necesidades de cada cliente, fomentando un futuro financiero estable y confiable.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4} className="pb-2 ">
          <div className="card-ms">
            <div className="mx-4 my-4">
              <IoEarth className="icon-header" />
              <h3>MISIÓN</h3>
              <p className="mb-0">
              Brindar soluciones financieras innovadoras y accesibles que impulsen el crecimiento personal y económico de nuestros clientes, siempre con transparencia, compromiso y un servicio personalizado.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4} className="pb-2">
          <div className="card-ms">
            <div className="mx-4 my-4">
              <IoTrophyOutline className="icon-header" />
              <h3>OBJETIVO</h3>
              <p className="mb-0">
              Ofrecer productos financieros que faciliten la gestión de las finanzas personales, ayudando a nuestros clientes a alcanzar sus metas a través de soluciones confiables y eficientes.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
