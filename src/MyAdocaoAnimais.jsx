import React from 'react';
import MyCachorroCards from './MyCachorroCards';

export default function MyAdocaoAnimais() {
  return (
    <>
      <div className="bg-success text-white mt-3 ">
        <h1 className="m-0">Animais para Adoção </h1>
      </div>
      <div className="  text-white  m-0 ">
        <br />
        <div className="d-flex  flex-row justify-content-around ">
          <MyCachorroCards />
        </div>
      </div>
    </>
  );
}
