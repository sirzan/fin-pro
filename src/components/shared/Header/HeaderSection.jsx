'use client'
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

export const HeaderSection = ({ title,back, seccion,content,img='' }) => {
  return (
    <section style={{backgroundImage:`url(${img?img:'/images/bg/cover-web.jpg'})`}} className="position-relative header-ms-section">
      <Container>
        <Row>
          <Col className="m-auto">
            <h2 className="fw-semibold text-white">{title}</h2>
            <p className="lead text-white">{content}</p>
            <Breadcrumb className="d-flex justify-content-center text-white">
              <Breadcrumb.Item href="#" className="text-white">Inicio</Breadcrumb.Item>
             {
              back &&
              <Breadcrumb.Item href="#" className="text-white">{back}</Breadcrumb.Item>
             }
              <Breadcrumb.Item active className="text-white">{seccion}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
