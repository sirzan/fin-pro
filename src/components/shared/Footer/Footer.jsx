"use client";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="p-5 bg-primary position-relative">
      <Container className="mt-7 text-white">
        <Row>
          <Col md={3}>
            <Image
              src="/images/logo.png"
              width={200}
              height={60}
              title="FinPro"
              alt="FinPro"
            />
            <p align="justify" className="mt-4">
              En FinPro, nos dedicamos a ofrecer soluciones financieras
              innovadoras y personalizadas. Nuestro equipo de expertos trabaja
              incansablemente para ayudarte a alcanzar tus objetivos económicos,
              ya sea a través de préstamos personales, tarjetas de crédito o
              asesoría financiera.
            </p>
          </Col>
          <Col md={9}>
            <Row>
              <Col md={4}>
                <h3 className="fw-semibold fs-5">Páginas</h3>
                <Navbar>
                  <Nav className="flex-column">
                    <Nav.Item>
                      <Link href="/" className="nav-link text-white">
                        Inicio
                      </Link>
                      <Link href="/about" className="nav-link text-white">
                        Conócenos
                      </Link>
                      <Link href="/service" className="nav-link text-white">
                        Servicios
                      </Link>
                      <Link href="/faq" className="nav-link text-white">
                        FAQ
                      </Link>
                      <Link href="/contact" className="nav-link text-white">
                        Contáctanos
                      </Link>
                    </Nav.Item>
                  </Nav>
                </Navbar>
              </Col>
              <Col md={4}>
                <h3 className="fw-semibold fs-5">Servicios</h3>
                <Navbar>
                  <Nav className="flex-column">
                    <Nav.Item>
                      <Link href="/service" className="nav-link text-white">
                        Préstamos Personales
                      </Link>
                      <Link href="/service" className="nav-link text-white">
                        Préstamos para Emprendedores
                      </Link>
                      <Link href="/service" className="nav-link text-white">
                        Consultoría Financiera Personalizada
                      </Link>
                    </Nav.Item>
                  </Nav>
                </Navbar>
              </Col>
              <Col md={4}>
                <h3 className="fs-5">Legal</h3>
                <Navbar>
                  <Nav className="flex-column">
                    <Nav.Item>
                      <Link href="/" className="nav-link text-white">
                        Términos y condiciones
                      </Link>
                      <Link href="/" className="nav-link text-white">
                        Políticas de privacidad
                      </Link>
                    </Nav.Item>
                  </Nav>
                </Navbar>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="text-white mt-5">
          <Col md={6}>
            Copyright 2024 FinPro | All Rights Reserved
          </Col>
          <Col md={6}>
            <div className="text-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <BsFacebook className="fs-3 mx-2" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <BsInstagram className="fs-3 mx-2" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <BsYoutube className="fs-3 mx-2" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTiktok className="fs-3 mx-2" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
