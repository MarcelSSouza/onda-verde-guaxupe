import React from 'react'
import QrcodePix from './assets/PIX.png';
import Sicredi from './assets/SICREDI.png';
import { Container } from 'react-bootstrap';

export default function MyAjuda() {
  return (
    <>
      <Container>
        <h1>Como ajudar a nossa causa?</h1>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis quam optio rem ab quae reiciendis, pariatur dolore molestiae molestias, odio tempora exercitationem in animi quod debitis. Unde, eius labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim mollitia, repudiandae, necessitatibus delectus rerum illo, a quo consequuntur incidunt voluptatem beatae in molestias explicabo! Vel, veniam! Adipisci, itaque placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor ad id ipsam sed, voluptatibus possimus ea repudiandae qui dolore odio inventore, sint aspernatur. Velit ullam praesentium hic laboriosam consequatur.</p>
        <h1>Como posso doar?</h1>
        <hr />
        <div className='d-flex flex-lg-row flex-column'>
          <div>
            <h1>Transferência Bancária</h1>
            <img src={Sicredi} class="img-fluid w-25" />
            <h3>Conta 10.397-9</h3>
            <h3>Banco 748 - Agência 0361</h3>
            <h3>CNPJ 45.540.170/0001-05</h3>
          </div>
        <br />
            <div>
              <h1>Pix</h1>
              <img src={QrcodePix} class="img-fluid" />
            </div>
        </div>
      </Container>
    </>
  )
}
