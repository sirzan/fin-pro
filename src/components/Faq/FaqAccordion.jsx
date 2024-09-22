
"use client";
import { Accordion } from "react-bootstrap";
export default function FaqAccordion() {

    const faqs = [
        {
          question: "¿Qué servicios ofrece FinPro?",
          answer:
            "En FinPro ofrecemos préstamos personales, tarjetas de crédito y consultoría financiera personalizada para ayudarte a alcanzar tus metas económicas.",
        },
        {
          question: "¿Cómo puedo solicitar un préstamo?",
          answer:
            "Puedes solicitar un préstamo a través de nuestro formulario en línea, donde deberás proporcionar información básica y tus necesidades financieras.",
        },
        {
          question: "¿Cuál es el proceso para obtener una tarjeta de crédito?",
          answer:
            "El proceso incluye completar una solicitud, donde evaluaremos tu perfil financiero y te proporcionaremos opciones adecuadas.",
        },
        {
          question: "¿Ofrecen asesoría financiera?",
          answer:
            "Sí, ofrecemos consultoría financiera personalizada para ayudarte a planificar y gestionar tus finanzas de manera efectiva.",
        },
        {
          question: "¿Cómo puedo contactarlos?",
          answer:
            "Puedes contactarnos a través de nuestro formulario de contacto en el sitio web, o llamándonos directamente a nuestra línea de atención al cliente.",
        },
      ];
    
  return (
    <Accordion defaultActiveKey="0">
    {faqs.map((faq, index) => (
      <Accordion.Item eventKey={index.toString()} key={index}>
        <Accordion.Header>{faq.question}</Accordion.Header>
        <Accordion.Body>{faq.answer}</Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
  )
}
