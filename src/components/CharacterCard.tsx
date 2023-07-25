import { Origin } from "@/@types";
import React from "react";
import { Button, Card } from "react-bootstrap";

interface CharacterCardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export default function CharacterCard({
  //   id,
  name,
  status,
  species,
  type,
  image,
}: CharacterCardProps) {
  return (
    <>
      <div>CharacterCard</div>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>
            {species}, {type}
          </Card.Subtitle>
          <Card.Text>{status}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
