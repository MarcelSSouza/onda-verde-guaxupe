import React from 'react'
import doacaodinheiro from './assets/doacao-dinheiro.png'
import  voluntario from './assets/voluntario.png'
import doacaoracao from './assets/doacao-racao.png'
export default function GridVertical2() {
  return (
    <>
    <div className='bg-success text-white'>
        <h2 className='text-center'>COMO NOS AJUDAR?</h2>
    </div>
    <div className='d-flex flex-lg-row flex-column justify-content-evenly'>
        <div>
        <img src={doacaodinheiro} alt="dog" width='120vw' />
        <h5>DONATIVOS</h5>
        </div>
        <div>
        <img src={voluntario} alt="doggy" width='120vw' />
        <h5>VOLUNTARIADO</h5>
        </div>
        <div>
        <img src={doacaoracao} alt="adocao" width='120vw' />
        <h5>SUPORTE COM ALIMENTOS</h5>
        </div>

    </div>
    </>
  )
}
