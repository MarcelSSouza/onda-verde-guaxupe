import React from "react";
import { Card } from "react-bootstrap";
import ExampleMancheteImage from "./assets/Manchete.jpg";
import ExampleMancheteImage2 from "./assets/Manchete2.jpg";

export default function MyNoticias() {
  return (
    <>
      <div className="container py-5 mt-3">
        <Card className="row g-0 mb-3" style={{ flexDirection: "row" }}>
          <div className="col-12 col-lg-3 col-md-4">
            <Card.Img
              src={ExampleMancheteImage}
              alt="Manchete"
              className="img-fluid w-100 mt-4"
            />
          </div>
          <Card.Body className="col-8 col-lg-9 col-md-8">
            <Card.Title>Conscientização sobre guarda responsável</Card.Title>
            <Card.Text>
              O médico veterinário da Secretaria Municipal de Meio Ambiente de
              Guaxupé, Marcelo Pedroza, a estagiária da referida pasta pública,
              Ana Carolina Trevisan, e a dirigente da ONG Onda Verde, Silvana
              Farah, ministraram palestra a alunos da Escola Municipal Coronel
              Antônio Costa Monteiro. A aula especial aconteceu de 31 de outubro
              de 2023, sobre a importância da guarda responsável de animais de
              estimação. Com distribuição de cartilha completa sobre cuidados
              com cães e gatos, entre outras informações, eles instruíram aos
              estudantes do Ensino Fundamental, tendo inclusive levado, ao
              local, banner ilustrativo e até um filhote de cãozinho, sem raça
              definida, batizado pela ONG como "Noah". A iniciativa do trio de
              profissionais se repetiu pelos últimos dias em outras instituições
              de ensino da rede pública municipal guaxupeana. Com um trabalho
              árduo, o poder público e a entidade do terceiro setor atuam na
              assistência a pessoas de baixa renda, no tocante à prestação de
              serviços em favor de animais domésticos.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="row g-0 mb-3" style={{ flexDirection: "row" }}>
          <div className="col-12 col-lg-3 col-md-4">
            <Card.Img
              src={ExampleMancheteImage2}
              alt="Manchete"
              className="img-fluid"
            />
          </div>
          <Card.Body className="col-8 col-lg-9 col-md-8">
            <Card.Title>Reconhecimento legal</Card.Title>
            <Card.Text>
            Os vereadores de Guaxupé aprovaram por unanimidade em duas votações, durante a 14ª Sessão Ordinária nessa segunda-feira (11), o Projeto de Lei do Legislativo nº 26/2023, que reconhece de utilidade pública a “Associação Comunitária Socioambiental Onda Verde de Guaxupé”. O PL é de autoria do vereador Gustavo Vinícius Silveira de Paula. A votação foi acompanhada por membros da entidade.
            <Card.Text>
            “É um passo enorme para nossa cidade e quem sabe futuramente conseguir a utilidade estadual e trazer recursos para a ONG […] que seja o primeiro passo de muitos para a nossa evolução”, disse o vereador autor do projeto de lei.
            </Card.Text>  
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
