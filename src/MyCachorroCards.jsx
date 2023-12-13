import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import cachorro from './assets/pug.jpg';
// Fictitious dog names
const nomesCachorros = [
  'Rex',
  'Bolinha',
  'Fido',
  'Fofinho',
  'Luna',
  'Max',
];

// Fictitious phrases to present the dogs
const frasesCachorros = [
  'Um cachorro adorável em busca de um lar amoroso.',
  'Esse cachorro é uma verdadeira bola de energia.',
  'O companheiro perfeito para sua família.',
  'Um amigo peludo que vai alegrar seus dias.',
  'Gosta de brincar e de carinho nas horas vagas.',
  'Procurando um lugar para chamar de seu.',
];

export default function MyCachorroCards() {
  return (
    <>
      <br />
      <h1>Adote um cachorro</h1>
      <br />
      <Container>
        {Array.from({ length: 2 }).map((_, rowIndex) => (
          <div key={rowIndex} className="row justify-content-evenly">
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const index = rowIndex * 3 + colIndex;
              return (
                <Card style={{ width: '18rem' }} className="mb-4">
                  <Card.Img variant="top" src={cachorro} />
                  <Card.Body>
                    <Card.Title>{nomesCachorros[index]}</Card.Title>
                    <Card.Text>{frasesCachorros[index]}</Card.Text>
                    <Button variant="primary">Adotar</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        ))}
      </Container>
    </>
  );
}
