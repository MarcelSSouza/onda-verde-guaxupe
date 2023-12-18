import React from "react";
import adocao from "./assets/adocao.png";
import dog from "./assets/dog-food.png";
import doggy from "./assets/doggy.png";
import evento from "./assets/shirt.png";

export default function GridVertical() {
  return (
    <>
      <div className="bg-success text-white">
        <h2 className="text-center">O QUE FAZEMOS?</h2>
      </div>
      <div className="d-flex flex-lg-row flex-column justify-content-evenly">
        <div>
          <img src={dog} alt="dog" width="120vw" />
          <h5>ABRIGO DE ANIMAIS</h5>
        </div>
        <div>
          <img src={doggy} alt="doggy" width="120vw" />
          <h5>CAMPANHAS DE ADOÇÃO</h5>
        </div>
        <div>
          <img src={adocao} alt="adocao" width="120vw" />
          <h5>CONSCIENTIZAÇÃO SOCIAL</h5>
        </div>
        <div>
          <img src={evento} alt="evento" width="120vw" />
          <h5>EVENTOS</h5>
        </div>
      </div>
    </>
  );
}
