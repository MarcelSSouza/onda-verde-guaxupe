import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pug from "./assets/pug.jpg";
export default function MyQuemSomos() {
  return (
    <Container className="py-5">
      <h2 className="text-center ">Quem Somos</h2>
      <hr />
      <Row className="d-flex align-items-center">
        <Col md={6}>
          <img
            src={pug}
            alt="Imagem da equipe da Onda Ver Guaxupé"
            className="img-fluid "
          />
        </Col>
        <Col md={6}>
          <p>
            A Associação Onda Verde foi fundada em 30 de outubro de 2021, e
            registrada em março de 2022, tendo como propósito trazer ao
            município de Guaxupé o desenvolvimento nas áreas ambiental, social e
            animal. A associação tem por finalidade a saúde única por meio da
            integração social através da defesa de bens e direitos sociais,
            coletivos e difusos relacionados à saúde humana e animal, ao meio
            ambiente, ao patrimônio cultural, aos direitos humanos e dos povos,
            por meio da elaboração de projetos teóricos e ações práticas com
            foco nas particularidades geográficas e necessidades básicas de cada
            grupo populacional da região de abrangência da Onda Verde.{" "}
          </p>
        </Col>
      </Row>
      <br />
      <br />

      <Row className="d-flex align-items-center">
        <h2 className="text-center ">Nossos Projetos</h2>
        <hr />

        <Col md={6}>
          <p>
            Foram efetuados em 2022 e 2023 projetos de castração em parceria com
            o Fórum de Guaxupé. Os recursos financeiros são oriundos de
            sentenças que se destinam para as Associações de Guaxupé, que buscam
            sua aprovação através de projetos. Por 02 (dois) anos consecutivos a
            ONG Onda Verde teve seus projetos aprovados. Com esses recursos,
            foram castrados 23 (vinte e três) cães em 2022 e 100 (cem) cães em
            2023. Importante destacar que os cães castrados são de famílias
            carentes.
            <p>
              Em andamento existem, ainda, um Programa de reflorestamento
              elaborado por algumas voluntárias, bem como o Reiki Solidário e o
              Reiki para todos, que realiza visitas onde são oferecidos três
              tratamentos aos idosos da entidade Vila Vicentina Frederico
              Ozanam: diálogo fraterno, acupuntura e Reiki aos que desejem
              receber o cuidado fraterno, funcionários e assistidos{" "}
            </p>
          </p>
        </Col>
        <Col md={6}>
          <img
            src={pug}
            alt="Imagem da equipe da Onda Ver Guaxupé"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <br />
          <br />
          <h2 className="text-center ">Documentos Públicos</h2>
          <hr />
          <p>
            A ONG Onda Verde tem como objetivo a transparência em suas ações e
            prestação de contas. Para isso, a cada projeto aprovado, é aberta
            uma conta bancária específica para o mesmo, onde todos os recursos
            são depositados e movimentados. Ao final do projeto, é elaborado um
            relatório com a prestação de contas, que é encaminhado ao Fórum de
            Guaxupé, para que seja feita a prestação de contas ao Tribunal de
            Justiça de Minas Gerais. Além disso, a prestação de contas é
            publicada no site da ONG Onda Verde, para que todos os interessados
            possam ter acesso.
          </p>

          <div className="d-flex">
            <a
              href="https://drive.google.com/drive/folders/1L2tefITNd4LFumThrfLdxGeLSc05a4cY?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success m-auto text-white"
            >
              Acesse nossos documentos públicos
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <br />
          <br />
          <h2 className="text-center ">A diretoria atual é composta por:</h2>
          <hr />

          <p>
            <div className="d-flex flex-column flex-md-row  justify-content-around">
              <div className="d-flex flex-column">
                <b>Presidente</b>
                José Antonio Lofrano
                <br />
                <b>Vice Presidente</b>
                Adelma Aparecida Martins
                <br />
                <b>1º tesoureira</b>
                Maria Aparecida Sandroni da Silva
                <br />
                <b>2º tesoureiro</b>
                Adriano Maurício Maretti
                <br />
                <b> 1º secretária</b>
                Glatieris Aparecida Madeira Gomes
                <br />
              </div>
              <div className="d-flex flex-column">
                <b>2º secretária</b>
                Helenilce Aparecida Passos
                <br />
                <b>Suplente</b>
                Maria Carmelita Remédio Bardi
                <br />
                <b>Conselheira</b>
                Maria de Lourdes Sandroni
                <br />
                <b>Conselheira</b>
                Silvana Magalhães Farah
                <br />
                <b>Conselheira</b>
                Regina Santos
              </div>
            </div>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
