import { GetServerSideProps } from "next";
import React from "react";

type Props = {};

interface CharacterType {
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

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface ServerSideProps {
  character: CharacterType;
}

// getServerSideProps is a function that says: write this html before sending it
// nextjs docu explains how to use https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props
// needs to be async to first run on the server
// type of the function needs to be the special next type GetServerSideProps
// output <> will be ServerSideProps
const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
  // no react hooks on the server!

  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  const result = (await response.json()) as CharacterType;

  // structure of return: object with field props containing "character" as result
  return {
    props: {
      character: result,
    },
  };
};

function serverside({ character }: ServerSideProps) {
  return <div>serverside</div>;
}

export default serverside;
