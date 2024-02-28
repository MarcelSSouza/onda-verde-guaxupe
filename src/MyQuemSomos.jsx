import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Escola from "./assets/13.jpeg";
import pug from "./assets/guaxupe.webp";

export default function MyQuemSomos() {
  return (
    <Container className="py-5">
      <Row className="d-flex align-items-center">
        <Col md={6}>
          <img
            src={pug}
            alt="Imagem da equipe da Onda Ver Guaxupé"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h1 className="text-center ">Quem Somos</h1>
          <hr />
          <p className="text-start">
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
        <Col md={6}>
          <h1 className="text-center ">Nossos Projetos</h1>
          <hr />
          <p className="text-start">
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
            src={Escola}
            alt="Imagem da equipe da Onda Ver Guaxupé"
            className="img-fluid"
            style={{ width: "75%" }}
          />
        </Col>
      </Row>

      <br />
      <Row className="d-flex align-items-center">
        <Col md={12}>
          <h1 className="text-center ">Missão, Visão e Valores </h1>
          <hr />
          <div className="row d-flex flex-lg-row flex-column justify-content-evenly align-items-start">
            <div className="missao-wrapper col-lg-4">
              <h5>Missão</h5>
              <p>
                Prover e desenvolver projetos focados em aspectos sociais,
                ambientais e de proteção animal, desenvolvendo as comunidades
                onde atuamos.
              </p>
            </div>
            <div className="missao-wrapper col-lg-4">
              <h5>Visão</h5>
              <p>
                Ser referência em soluções e projetos para desenvolvimento
                socioambiental e proteção da causa animal.
              </p>
            </div>
            <div className="missao-wrapper col-lg-4">
              <h5>Valores</h5>
              <ul className="list-unstyled">
                <li>Preservação do meio ambiente</li>
                <li>Valorização das pessoas</li>
                <li>Confiança, ética e transparência</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <br />
          <br />
          <h1 className="text-center ">Documentos Públicos</h1>
          <hr />
          <p>
            A Onda Verde é uma associação sem fins lucrativos, que tem como
            objetivo o desenvolvimento nas áreas ambiental, social e animal.
            Prezamos pela trasperência e por isso disponibilizamos nossos
            documentos públicos para que todos possam ter acesso pelo link
            abaixo.
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
          <h1 className="text-center ">A diretoria atual é composta por:</h1>
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
