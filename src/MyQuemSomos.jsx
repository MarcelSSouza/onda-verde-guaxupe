import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pug from './assets/pug.jpg';
export default function MyQuemSomos() {
  return (
    <Container className="py-5">
      <h2 className="text-center ">Quem Somos</h2>
      <hr />
      <Row>
        <Col md={6}>
          <img
            src= {pug}
            alt="Imagem da equipe da Onda Ver Guaxupé"
            className="img-fluid "
          />
        </Col>
        <Col md={6}>
          <p>
            A ONG Onda Ver Guaxupé é uma organização dedicada ao bem-estar e à proteção de gatos e cachorros na região de Guaxupé. Nosso compromisso é oferecer abrigo, cuidados e encontrar lares amorosos para animais desabrigados ou em situações de risco.
          </p>
          <p>
            Nossa equipe é formada por apaixonados por animais que dedicam seu tempo e esforço para fazer a diferença na vida desses seres incríveis. Juntos, trabalhamos arduamente para garantir que cada gato e cachorro receba a atenção, o cuidado e o amor que merecem.
          </p>
          <p>
            Além de resgatar e reabilitar animais, também promovemos a conscientização sobre a importância da esterilização, vacinação e cuidados adequados com animais de estimação. Acreditamos que a educação é fundamental para criar uma comunidade que trata todos os seres vivos com compaixão.
          </p>
          <p>
            Junte-se a nós nessa missão de fazer do mundo um lugar melhor para os animais. Sua ajuda, apoio e amor são essenciais para o sucesso de nosso trabalho. Juntos, podemos criar um futuro mais brilhante para gatos e cachorros em Guaxupé.
          </p>
        </Col>
      </Row>
<br />
<br />

      <Row>
        
      <h2 className="text-center ">Nossas ações</h2>
      <hr />

      <Col md={6}>
          <p>
            A ONG Onda Ver Guaxupé é uma organização dedicada ao bem-estar e à proteção de gatos e cachorros na região de Guaxupé. Nosso compromisso é oferecer abrigo, cuidados e encontrar lares amorosos para animais desabrigados ou em situações de risco.
          </p>
          <p>
            Nossa equipe é formada por apaixonados por animais que dedicam seu tempo e esforço para fazer a diferença na vida desses seres incríveis. Juntos, trabalhamos arduamente para garantir que cada gato e cachorro receba a atenção, o cuidado e o amor que merecem.
          </p>
          <p>
            Além de resgatar e reabilitar animais, também promovemos a conscientização sobre a importância da esterilização, vacinação e cuidados adequados com animais de estimação. Acreditamos que a educação é fundamental para criar uma comunidade que trata todos os seres vivos com compaixão.
          </p>
          <p>
            Junte-se a nós nessa missão de fazer do mundo um lugar melhor para os animais. Sua ajuda, apoio e amor são essenciais para o sucesso de nosso trabalho. Juntos, podemos criar um futuro mais brilhante para gatos e cachorros em Guaxupé.
          </p>
        </Col>
        <Col md={6}>
          <img
            src= {pug}
            alt="Imagem da equipe da Onda Ver Guaxupé"
            className="img-fluid"
          />
        </Col>

      </Row>
    </Container>
  );
}
