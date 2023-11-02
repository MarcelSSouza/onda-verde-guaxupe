import React from "react";
import { Card } from "react-bootstrap";
import ExampleMancheteImage from './assets/Manchete.jpg';
import ExampleMancheteImage2 from './assets/Manchete2.jpg';


export default function MyNoticias() {
  return (
    <>
      <div
        className="w-75 d-flex flex-column m-auto mt-5"
      >
        <div className="">
          <Card
            className="row no-gutters mb-3"
            style={{ maxHeight: "368px" }}
          >
            <Card.Img
              src={ExampleMancheteImage}
              alt="Manchete"
              className="img-fluid"
              style={{ width: "300px" }}
            />
            <Card.Body className="col-md-8">
              <Card.Title>
                Conscientização sobre guarda responsável
              </Card.Title>
              <Card.Text>
                O médico veterinário da Secretaria Municipal de Meio Ambiente de Guaxupé, Marcelo Pedroza, a estagiária da referida pasta pública, Ana Carolina Trevisan, e a dirigente da ONG Onda Verde, Silvana Farah, ministraram palestra a alunos da Escola Municipal Coronel Antônio Costa Monteiro. A aula especial aconteceu de 31 de outubro de 2023, sobre a importância da guarda responsável de animais de estimação. Com distribuição de cartilha completa sobre cuidados com cães e gatos, entre outras informações, eles instruíram aos estudantes do Ensino Fundamental, tendo inclusive levado, ao local, banner ilustrativo e até um filhote de cãozinho, sem raça definida, batizado pela ONG como "Noah".  A iniciativa do trio de profissionais se repetiu pelos últimos dias em outras instituições de ensino da rede pública municipal guaxupeana. Com um trabalho árduo, o poder público e a entidade do terceiro setor atuam na assistência a pessoas de baixa renda, no tocante à prestação de serviços em favor de animais domésticos (fotos na aba 'Galeria de Fotos')
              </Card.Text>
              <Card.Footer
                className="text-muted">
                02/11/2023
              </Card.Footer>
            </Card.Body>
          </Card>

          <Card
            className="row no-gutters mb-3"
            style={{ maxHeight: "368px" }}
          >
            <Card.Img
              src={ExampleMancheteImage2}
              alt="Manchete"
              className="img-fluid"
              style={{ width: "300px" }}
            />
            <Card.Body className="col-md-8">
              <Card.Title>
                Reconhecimento legal
              </Card.Title>
              <Card.Text>
                Os vereadores de Guaxupé aprovaram por unanimidade em duas votações, durante a 14ª Sessão Ordinária em 11 de setembro de 2023, o Projeto de Lei do Legislativo nº 26/2023, que reconhece de utilidade pública a “Associação Comunitária Socioambiental Onda Verde de Guaxupé”. O PL é de autoria do vereador Gustavo Vinícius Silveira de Paula. A votação foi acompanhada por membros da entidade.
              </Card.Text>
              <Card.Footer
                className="text-muted">
                02/11/2023
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
      </div >
    </>
  )
}