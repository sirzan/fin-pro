import { Col, Container, Row } from "react-bootstrap";
import { IoPlayCircleOutline } from "react-icons/io5";
import { HeaderSection } from "app/components/shared/Header/HeaderSection";
import { FaQuestion } from "react-icons/fa";


export const metadata = {
  title: "Conócenos - FinPro",
  description: "Descubre quiénes somos en FinPro. Con un equipo de expertos en finanzas, estamos aquí para apoyarte en cada paso de tu camino.",
  openGraph: {
    title: "Conócenos - FinPro",
    description: "Conoce nuestra misión y visión en FinPro. Estamos dedicados a brindarte el mejor servicio financiero.",
    url: "https://www.finpro.com/conocenos",
    image: "https://www.finpro.com/conocenos-image.jpg",
  },
};

export default function About() {
  return (
    <>
      <HeaderSection title="¿Quiénes somos?" seccion="Conócenos" />
      <section>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={5}>
              <span className="badge badge-primary-soft pb-2 mb-3">
                <span className="ic-3x rotation">
                  <FaQuestion />
                </span>
              </span>
              <h1 className="mt-3 font-w-5">Nuestra Historia</h1>
              <p className="lead">
                Fundada con el propósito de brindar soluciones financieras
                accesibles, FinPro nace de la necesidad de ofrecer productos que
                realmente se adapten a las necesidades de nuestros clientes. A
                lo largo de los años, hemos crecido y evolucionado, siempre
                enfocados en el bienestar de nuestros usuarios.
              </p>
              <p className="mb-0">
                Únete a nuestra familia FinPro y descubre cómo podemos ayudarte
                a transformar tus sueños financieros en realidad. ¡Contáctanos
                hoy mismo!
              </p>
            </Col>
            <Col md={6}>
              <Row className="align-items-center">
                <Col md={6}>
                  <img
                    src="./images/about/10.jpg"
                    alt="soluciones financieras"
                    title="soluciones financieras"
                    width="306"
                    loading="lazy"
                    height="459"
                    className="img-fluid rounded shadow-lg"
                  />
                </Col>
                <Col md={6}>
                  <img
                    src="./images/about/12.jpg"
                    alt="podemos ayudarte"
                    title="podemos ayudarte"
                    width="306"
                    loading="lazy"
                    height="459"
                    className="img-fluid rounded shadow-lg mt-5"
                  />
                </Col>
                <Col md={10} className="mx-auto mt-n11">
                  <img
                    src="./images/about/11.jpg"
                    alt="transformar tus sueños financieros"
                    title="transformar tus sueños financieros"
                    width="526"
                    loading="lazy"
                    height="350"
                    className="img-fluid rounded shadow-lg mt-5"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-center text-center mb-4">
            <Col>
              <span className="h5 text-primary">
                <b>¿Que hacemos?</b>
              </span>
              <h2 className="mt-4">
                Funciones principales de nuestra compañia
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={7} className="p-4">
              <div className="position-relative">
                <img
                  src="./images/about/14.jpg"
                  alt="Ofrecemos Préstamos Personales"
                  title="Ofrecemos Préstamos Personales"
                  width="722"
                  loading="lazy"
                  height="425"
                  className="img-fluid"
                />
                <div className="video-btn video-btn-pos">
                  <a
                    href="#"
                    target="_blank"
                    className="play-btn popup-youtube"
                    rel="noopener noreferrer"
                  >
                    <IoPlayCircleOutline />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="d-flex justify-content-between mb-5">
                <div className="me-3">
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1360ef"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-square bg-primary-soft p-2 rounded"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>{" "}
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">Ofrecemos Préstamos Personales</h3>
                  <p>
                    Proporcionamos soluciones de financiamiento adaptadas a tus
                    necesidades, desde préstamos pequeños hasta montos más
                    grandes, con condiciones flexibles.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                <div className="me-3">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1360ef"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-square bg-primary-soft p-2 rounded"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>{" "}
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">
                    Financiamiento para Pequeñas Empresas
                  </h3>
                  <p>
                    Brindamos apoyo a emprendedores y pequeñas empresas con
                    soluciones de financiamiento que impulsan su crecimiento y
                    desarrollo.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                <div className="me-3">
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1360ef"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-square bg-primary-soft p-2 rounded"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>{" "}
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2">Asesoría Financiera Personalizada</h3>
                  <p>
                    Nuestro equipo de expertos está disponible para brindarte
                    asesoría personalizada, ayudándote a tomar decisiones
                    informadas sobre tus finanzas.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
