import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import cachorro1 from "./assets/grid-img-4.jpeg";
import cachorro2 from "./assets/grid-img-11.jpeg";
import cachorro3 from "./assets/grid-img-8.jpeg";
const imagemCachorros = [cachorro1, cachorro2, cachorro3];

// Fictitious phrases to present the dogs

export default function MyCachorroCards() {
  return (
    <>
      <Container className="bg-color-white m-0">
        {Array.from({ length: 1 }).map((_, rowIndex) => (
          <div key={rowIndex} className="row justify-content-evenly  ">
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const index = rowIndex * 3 + colIndex;
              return (
                <Card style={{ width: "18rem" }} className="mb-4 p-0">
                  <Card.Img
                    variant="top"
                    src={imagemCachorros[index]}
                    className="h-100"
                  />
                  <Card.Body>
                    <Button variant="success" href="/contato">Adotar</Button>
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
