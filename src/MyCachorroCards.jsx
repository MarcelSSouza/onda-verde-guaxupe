import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import cachorro from "./assets/pug.jpg";
// Fictitious dog names
const imagemCachorros = ["pug.jpg", "pug.jpg", "pug.jpg"];
const nomesCachorros = ["Rex", "Bolinha", "Fido"];

// Fictitious phrases to present the dogs

export default function MyCachorroCards() {
  return (
    <>

      <Container>
        {Array.from({ length: 1}).map((_, rowIndex) => (
          <div key={rowIndex} className="row justify-content-evenly">
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const index = rowIndex * 3 + colIndex;
              return (
                <Card style={{ width: "18rem" }} className="mb-4">
                  <Card.Img variant="top" src={cachorro} />
                  <Card.Body>
                    <Card.Title>{nomesCachorros[index]}</Card.Title>
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
