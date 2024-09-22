import { Col, Container, Row } from "react-bootstrap";
import { IoCheckmarkSharp } from "react-icons/io5";

import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FaRegChartBar } from "react-icons/fa";
import { ContactSection } from "app/components/service/ContactSection";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Servicios - FinPro",
  description:
    "Explora nuestros servicios financieros, incluyendo préstamos personales, tarjetas de crédito y consultoría financiera personalizada.",
  openGraph: {
    title: "Servicios - FinPro",
    description:
      "Nuestros servicios están diseñados para ayudarte a alcanzar tus metas financieras. Descubre cómo podemos asistirte.",
    url: "https://www.finpro.com/servicios",
    image: "https://www.finpro.com/servicios-image.jpg",
  },
};

export default function Service() {
  return (
    <>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg={5} xl={6} className="order-lg-1 mb-8 mb-lg-0">
              <Image
                src="/images/service/01.png"
                alt="Desarrollamos aplicaciones moviles"
                className="img-fluid"
                width={636}
                height={626}
              />
            </Col>
            <Col lg={7} xl={6}>
              <div className="border rounded-pill px-3 py-2 text-muted d-inline-block">
                <span className="badge rounded-pill bg-primary me-2">
                  soluciones
                </span>{" "}
                <span> financieras </span>
              </div>
              <h1 className="display-3 mt-3">
                Transforma Tu Futuro <br />
                <span className="text-primary fw-semibold">Financiero</span>
              </h1>
              <p className="lead">
                Aquí, no solo ofrecemos productos financieros; te brindamos las
                herramientas y el apoyo necesario para que logres tus sueños y
                metas.
              </p>
              <p align="justify">
                En un mundo lleno de oportunidades, estamos a tu lado para
                ayudarte a aprovechar cada una de ellas. Imagina tener el poder
                de decidir tu futuro: financiar tu propio negocio, adquirir la
                casa de tus sueños o disfrutar de la libertad financiera. Con
                nuestros servicios personalizados, cada paso que des te acerca a
                esa realidad. ¡Descubre cómo podemos impulsar tu viaje hacia el
                éxito financiero hoy mismo!
              </p>
              <Link
                href="/contact"
                className="btn btn-primary btn-lg btn-sm mx-2"
              >
                <BiMailSend className="fs-3" /> Contáctenos
              </Link>
              <a
                className="btn btn-outline-dark mx-2 btn-lg btn-sm"
                href="tel:+00000000000"
              >
                <BiPhoneCall className="fs-3" /> Llamenos
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-between">
            <Col md={6}>
              <Image
                src="/images/service/02.png"
                alt="Comercio electronico"
                width={636}
                height={577}
                className="img-fluid"
              />
            </Col>
            <Col md={6} xl={5}>
              <span className="badge badge-primary-soft p-2 font-w-6">
                Préstamos
              </span>
              <h2 className="fw-semibold text-primary fs-1">
                Préstamos Personales
              </h2>
              <p align="justify">
                Proporcionamos préstamos personales diseñados para ayudarte a
                financiar tus proyectos y gastos inesperados. Con tasas
                competitivas y un proceso ágil, te brindamos la solución
                perfecta para tus necesidades.
              </p>

              <div className="d-flex flex-wrap flex-column justify-content-start">
                <div className="mb-3 me-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      {" "}
                      <IoCheckmarkSharp />
                    </div>
                    <p className="mb-0 ms-3">Aprobación rápida</p>
                  </div>
                </div>
                <div className="mb-3 me-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      {" "}
                      <IoCheckmarkSharp />
                    </div>
                    <p className="mb-0 ms-3">Condiciones personalizadas</p>
                  </div>
                </div>
                <div className="mb-3 me-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      {" "}
                      <IoCheckmarkSharp />
                    </div>
                    <p className="mb-0 ms-3">Sin comisiones ocultas</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-ms-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <span className="badge badge-primary-soft pb-2 mb-3">
                <span className="ic-3x rotation">
                <FaRegChartBar />

                </span>
              </span>
              <h3 className="fw-semibold">Tu Aliado Financiero en Cada Paso</h3>
              <p className="lead">
                En FinPro, entendemos que cada decisión financiera puede ser un
                punto de inflexión en tu vida. Ya sea que estés buscando un
                préstamo personal, una tarjeta de crédito con beneficios o
                asesoría para emprender, estamos aquí para brindarte soluciones
                adaptadas a tus necesidades.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-between">
            <Col md={6} xl={5}>
              <span className="badge badge-primary-soft p-2 font-w-6 mb-4">
                Préstamos
              </span>
              <h3 className="fw-semibold text-primary">
                Préstamos para Emprendedores
              </h3>
              <p align="justify" className="lead">
                Apoyamos a emprendedores y pequeñas empresas con financiamiento
                accesible para impulsar sus proyectos. Nuestros préstamos son
                ideales para cubrir gastos operativos o invertir en crecimiento.
              </p>
              <div className="d-flex flex-wrap flex-column justify-content-start">
                <div className="mb-3 me-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      {" "}
                      <IoCheckmarkSharp />
                    </div>
                    <p className="mb-0 ms-3">Flexibilidad en plazos y montos</p>
                  </div>
                </div>
                <div className="mb-3 me-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      {" "}
                      <IoCheckmarkSharp />
                    </div>
                    <p className="mb-0 ms-3">
                      Asesoría para mejorar tu plan de negocio
                    </p>
                  </div>
                </div>
                <div className="mb-3 me-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      {" "}
                      <IoCheckmarkSharp />
                    </div>
                    <p className="mb-0 ms-3">Aprobación simplificada</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Image
                src="/images/service/03.png"
                alt="Trafico organico"
                width={636}
                height={636}
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col md={6}>
              <Image
                src="/images/service/04.png"
                alt="Cerrar mas ventas"
                width={636}
                height={514}
                className="img-fluid"
              />
            </Col>
            <Col md={6} xl={5}>
              <span className="badge badge-primary-soft p-2 font-w-6">
                Consultoría
              </span>
              <h3 className="fw-semibold text-primary">
                Consultoría Financiera Personalizada
              </h3>
              <p align="justify" className="lead">
                En FinPro, creemos que cada cliente es único, por lo que
                ofrecemos una consultoría financiera adaptada a tus necesidades
                individuales. Nuestro equipo de expertos en finanzas está listo
                para trabajar contigo, entendiendo tu situación financiera
                actual y tus objetivos a corto y largo plazo.
              </p>
              <div className="d-flex flex-wrap flex-column justify-content-start">
                <div className="mb-3 me-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      {" "}
                      <IoCheckmarkSharp />
                    </div>
                    <p className="mb-0 ms-3">Análisis Personalizado</p>
                  </div>
                </div>
                <div className="mb-3 me-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      {" "}
                      <IoCheckmarkSharp />
                    </div>
                    <p className="mb-0 ms-3">Asesoría en Inversiones</p>
                  </div>
                </div>
                <div className="mb-3 me-4">
                  <div className="d-flex align-items-center">
                    <div className="badge-primary-soft rounded p-1">
                      {" "}
                      <IoCheckmarkSharp />
                    </div>
                    <p className="mb-0 ms-3">Gestión de Deudas</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
