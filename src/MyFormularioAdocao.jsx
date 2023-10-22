import React, { useState } from 'react';
import { Form, Button, Col, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import DatePicker from "react-datepicker"; // You need to install and import a date picker library

import "react-datepicker/dist/react-datepicker.css";

export default function MyFormularioAdocao() {
  const serviceID = "service_jbk99ac";
  const templateID = "template_cg7la9p";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date()); // Initialize with current date
  const [donationAmount, setDonationAmount] = useState("");
  const [donationDate, setDonationDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const templateParams = {
    to_name: name,
    to_email: email,
    to_phone: phone,
    to_dateOfBirth: dateOfBirth.toDateString(),
    to_donationAmount: donationAmount,
    to_donationDate: donationDate,
    to_paymentMethod: paymentMethod,
  };

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    setIsSubmitting(true);
    emailjs
      .send(serviceID, templateID, templateParams, "MVtv7N734mINkSOu9")
      .then(
        (result) => {
          alert("Sua mensagem foi enviada com sucesso!");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Desculpe, houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde."
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <>
      <div className="w-75 d-flex flex-column m-auto mt-5">
        <h1 className="text-center">Envie sua sugestão, mensagem ou dúvida</h1>
        <br />
        <Form onSubmit={sendEmail}>
          <Row className="g-2">
            <Col md>
              <Form.Group>
                <FloatingLabel label="Nome Completo">
                  <Form.Control
                    as="input"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <FloatingLabel label="Celular">
                  <Form.Control
                    as="input"
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md>
              <Form.Group>
                <FloatingLabel label="Email">
                  <Form.Control
                    type="text"
                    as="input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <FloatingLabel label="Data de Nascimento">
                  <DatePicker
                    selected={dateOfBirth}
                    onChange={(date) => setDateOfBirth(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md>
              <Form.Group>
                <FloatingLabel label="Quantia da Doação">
                  <Form.Control
                    type="text"
                    as="input"
                    onChange={(e) => setDonationAmount(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <FloatingLabel label="Data da Doação">
                  <Form.Control
                    type="text"
                    as="input"
                    onChange={(e) => setDonationDate(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <FloatingLabel label="Método de Pagamento">
                  <Form.Control
                    type="text"
                    as="input"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
          <Button
            variant="success"
            type="submit"
            className="mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </Form>
      </div>
    </>
  );
}
