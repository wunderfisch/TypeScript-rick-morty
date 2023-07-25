import { GetServerSideProps } from "next";
import React from "react";
import styles from "@/styles/card.module.css";
import Head from "next/head";

// type Props = {};

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
// function doesn't have to be called(calls itself), but exported
// needs to be async to first run on the server
// type of the function needs to be the special next type GetServerSideProps
// output <> will be ServerSideProps
export const getServerSideProps: GetServerSideProps<
  ServerSideProps
> = async () => {
  // no react hooks on the server!
  // this
  console.log(
    "this console.log/function is only on the server (terminal), not in client/browser"
  );

  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  const result = (await response.json()) as CharacterType;
  // console logs from getServerSideProps-function don't get exposed in browser on server side components since they are already rendered and only then send to the browser
  // console.log("process.env.API_KEY :>> ", process.env.API_KEY);
  // structure of return: object with field props containing "character" as result
  return {
    props: {
      character: result,
    },
  };
};

function serverside({ character }: ServerSideProps) {
  console.log(
    "this console.log is in the dev tools of the browser and on the terminal of the server. The page is rendered on the server and only then send to the client."
  );
  return (
    <div>
      <Head>
        <title key="title">CSR</title>
      </Head>
      {/* here we can have a <Head>, the site is already rendered by the server  */}
      <h1>Server Side Component</h1>
      <div>
        {" "}
        <div className={styles.card}>
          {/* no conditional rendering neccessary, browser get the page already build*/}
          {/* first  the function getServerSideProps is running and returns the data, hands it over as { character }: ServerSideProps), only then the site is build */}
          <p>{character.name}</p>
          {/* <p>{character.status}</p> */}
        </div>
      </div>
    </div>
  );
}

// here we don't need state variables that might be null in the beginning and filled later. because the function getServerSideProps always runs before the jsx code is executed (breaks if fetch doesn't work)

export default serverside;
