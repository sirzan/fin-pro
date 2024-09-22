"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider index-3">
      <Slider {...settings}>
        <div className="item">
          <div
            style={{
              backgroundImage: 'url("/images/bg/01.jpg")',
            }}
            className="section-slider d-flex align-items-center justify-content-center bg-secondary px-3"
          >
            <div className="col-md-6 text-center" style={{ zIndex: "1" }}>
              <h1 className="title-header-slider">
                Soluciones
                <span className="text-primary"> Financieras</span>
              </h1>
              <p className="content-slider">
                Préstamos personales, tarjetas de crédito y cuentas de ahorro.
                Todo en un solo lugar.
              </p>
              <Link href="/about" className="btn btn-primary me-1">
                Saber más
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline-light"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>

        <div className="item">
          <div
            style={{
              backgroundImage: 'url("/images/bg/02.jpg")',
            }}
            className="section-slider d-flex align-items-center justify-content-center bg-secondary px-3"
          >
            <div className="col-md-6 text-center" style={{ zIndex: "1" }}>
              <h2 className="title-header-slider">
              Tu Aliado Financiero 
                <span className="text-primary"> de Confianza</span>
              </h2>
              <p className="content-slider">
              Explora nuestras opciones de financiamiento personal y empieza a construir un futuro financiero sólido y seguro con FinPro.
              </p>
              <Link href="/about" className="btn btn-primary me-1">
                Saber más
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline-light"
              >
                Contáctanos
              </Link>

            </div>
          </div>
        </div>

        <div className="item">
          <div
            style={{
              backgroundImage: 'url("/images/bg/03.jpg")',
            }}
            className="section-slider d-flex align-items-center justify-content-center bg-secondary px-3"
          >
            <div className="col-md-6 text-center" style={{ zIndex: "1" }}>
              <h2 className="title-header-slider">
              Finanzas Simples, 
                <span className="text-primary"> Soluciones Grandes</span>
              </h2>
              <p className="content-slider">
              Con nuestros productos financieros diseñados para ti, gestionar tu dinero nunca ha sido tan fácil. Solicita un préstamo o abre tu cuenta hoy mismo.
              </p>
              <Link href="/about" className="btn btn-primary me-1">
                Saber más
              </Link>
              <Link href="/about" className="btn btn-primary me-1">
                Saber más
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
