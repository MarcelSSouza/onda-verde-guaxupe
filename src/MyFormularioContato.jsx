import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function MyFormularioContato() {
  const serviceID = 'service_b4xjesh';
  const templateID = 'template_mzqpca7';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const templateParams = {
    to_name: name,
    to_email: email,
    to_phone: phone,
    to_message: message,
  };

  function sendEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || phone === '' || message === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    setIsSubmitting(true);
    emailjs
      .send(serviceID, templateID, templateParams, 'AbbZfjEa3qDPnVzeq')
      .then(
        (result) => {
          alert('AuAu! Sua mensagem foi enviada com sucesso!');
        },
        (error) => {
          console.log(error.text);
          alert(
            'Desculpe, houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.',
          );
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="w-75 d-flex flex-column m-auto mt-2 ">
      <br />
      <h1 className="text-center">Envie sua sugestão, mensagem ou dúvida</h1>
      <br />
      <Form onSubmit={sendEmail} className="">
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
                  type="number"
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
                  type="email"
                  as="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md>
            <Form.Group>
              <FloatingLabel label="Mensagem">
                <Form.Control
                  as="textarea"
                  rows={50}
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Button
          variant="success"
          type="submit"
          className="mt-2 w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </Button>
      </Form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default MyFormularioContato;
