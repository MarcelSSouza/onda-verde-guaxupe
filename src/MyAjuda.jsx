import React from "react";
import QrcodePix from "./assets/PIX.png";
import Sicredi from "./assets/SICREDI.png";
import { Container } from "react-bootstrap";

export default function MyAjuda() {
  return (
    <>
      <Container>
        <h1>Como ajudar a nossa causa?</h1>
        <hr />
        <p>
          Todas as ações desenvolvidas pela ONG Onda Verde de Guaxupé são
          provenientes exclusivamente do trabalho e doações voluntárias da sua
          diretoria, colaboradores e membros da comunidade, que acreditam no
          nosso trabalho em defesa dos animais.
        </p>
        <h1>Você sabia...</h1>
        <hr />
        <div>
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
            <div className="d-flex  flex-column">
            <img alt="" src={QrcodePix} className="img-fluid vw-70" />


            <h5>
              ...que a ONG Onda Verde de Guaxupé conta com quase 10 lares
              temporários, oferecidos por pessoas da comunidade?
            </h5>
            </div>
            <div className="d-flex  flex-column">
            <img alt="" src={QrcodePix} className="img-fluid  vw-70" />

            <h5>
              ...que estes lares temporários cuidam de cerca de 40 cães que
              haviam sido abandonados, adultos e filhotes?
            </h5>
            </div>
            <div className="d-flex  flex-column">
              <img alt="" src={QrcodePix} className="img-fluid  vw-70" />
            <h5>
              ...que o consumo mensal de ração é de aproximadamente 750 kg?
            </h5>
            </div>                
          </div>
        </div>
        <h1>Como posso doar?</h1>
        <hr />
        <div className="d-flex flex-lg-row flex-column">
          <div>
            <h1>Transferência Bancária</h1>
            <img alt="" src={Sicredi} class="img-fluid w-25" />
            <h3>Conta 10.397-9</h3>
            <h3>Banco 748 - Agência 0361</h3>
            <h3>CNPJ 45.540.170/0001-05</h3>
          </div>
          <br />
          <div>
            <h1>Pix</h1>
            <img alt="" src={QrcodePix} className="img-fluid" />
          </div>
        </div>
      </Container>
    </>
  );
}
