import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import gato from './assets/pug.jpg';

// Fictitious cat names
const nomesGatos = [
  'Mia',
  'Frajola',
  'Bolinha',
  'Branquinho',
  'Fofinho',
  'Mel',
];

// Fictitious phrases to present the cats
const frasesGatos = [
  'Um gato adorável em busca de um lar amoroso.',
  'Esse gato é uma verdadeira bola de energia.',
  'O companheiro perfeito para sua família.',
  'Um amigo peludo que vai alegrar seus dias.',
  'Gosta de brincar e de carinho nas horas vagas.',
  'Procurando um lugar para chamar de seu.',
];

export default function MyGatoCards() {
  return (
    <>
      <br />
      <h1>Adote um gato</h1>
      <br />
      <Container>
        {Array.from({ length: 2 }).map((_, rowIndex) => (
          <div key={rowIndex} className="row justify-content-evenly">
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const index = rowIndex * 3 + colIndex;
              return (
                <Card style={{ width: '18rem' }} className="mb-4">
                  <Card.Img variant="top" src={gato} />
                  <Card.Body>
                    <Card.Title>{nomesGatos[index]}</Card.Title>
                    <Card.Text>{frasesGatos[index]}w</Card.Text>
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
