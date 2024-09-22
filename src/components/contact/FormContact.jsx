"use client";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useFormik } from "formik";
import { http } from "app/service/http"; // Asegúrate de que esta ruta sea correcta
import Swal from "sweetalert2";

export default function FormContact() {
  const options = [
    "Préstamos Personales",
    "Préstamos para Emprendedores",
    "Consultoría Financiera Personalizada",
  ];

  const [errors, setErrors] = useState({});

  const formik = useFormik({
    initialValues: {
      correo: "",
      asunto: "",
      nombre: "",
      apellido: "",
      mensaje: "",
      servicio: "", // Añadido aquí
    },
    onSubmit: async (values) => {
      setErrors({});

      // Verifica campos vacíos
      const newErrors = {};
      Object.keys(values).forEach((key) => {
        if (!values[key]) {
          newErrors[key] = true;
        }
      });

      if (!values.servicio) newErrors.servicio = true;

      if (Object.keys(newErrors).length) {
        setErrors(newErrors);
        Swal.fire({
          icon: "error",
          title: "Algo salió mal...",
          text: "Todos los campos del formulario son requeridos.",
        });
        return;
      }

      try {
        const { data } = await http.post("/contacto", values);
        if (data.success === "ok") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Su correo fue enviado con éxito!",
            text: "Le estaremos respondiendo en un periodo de 24 hs.",
            showConfirmButton: false,
            timer: 2500,
          });
          formik.resetForm();
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje.",
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row>
        <Col md={6}>
          <input
            placeholder="Nombre"
            className={`form-control p-3 mb-3 ${errors.nombre ? "is-invalid" : ""}`}
            id="nombre"
            name="nombre"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nombre}
          />
        </Col>
        <Col md={6}>
          <input
            placeholder="Apellido"
            className={`form-control p-3 mb-3 ${errors.apellido ? "is-invalid" : ""}`}
            id="apellido"
            name="apellido"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.apellido}
          />
        </Col>
        <Col md={12}>
          <input
            placeholder="Escriba su correo electrónico"
            className={`form-control p-3 mb-3 ${errors.correo ? "is-invalid" : ""}`}
            id="correo"
            name="correo"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.correo}
          />
        </Col>
        <Col md={12}>
          <input
            placeholder="Asunto"
            className={`form-control p-3 mb-3 ${errors.asunto ? "is-invalid" : ""}`}
            id="asunto"
            name="asunto"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.asunto}
          />
        </Col>
        <Col md={12} className="mb-3">
          <select
            id="servicio"
            name="servicio"
            onChange={formik.handleChange}
            value={formik.values.servicio}
            className={`form-select p-3 mb-3 ${errors.servicio ? "is-invalid" : ""}`}
          >
            <option value="">-- Seleccione un servicio --</option>
            {options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Col>
        <Col md={12}>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formik.values.mensaje}
            onChange={formik.handleChange}
            placeholder="Escriba su mensaje"
            className={`form-control p-3 mb-3 ${errors.mensaje ? "is-invalid" : ""}`}
          ></textarea>
        </Col>
      </Row>

      <button type="submit" className="btn btn-primary">
        Enviar Mensaje
      </button>
    </form>
  );
}
