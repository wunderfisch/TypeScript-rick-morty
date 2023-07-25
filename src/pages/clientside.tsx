import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@/styles/card.module.css";

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

// function does not have to have the same name as file (file name defines the url)
// since it is a react component it should to be named with a first capital letter
// since using a useEffect it has to be a capitalized react function
export default function ClientSideComponent() {
  console.log("this one is on the terminal");
  const [character, setCharacter] = useState<CharacterType | null>(null);

  const fetchCharacter = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/1");
    const result = (await response.json()) as CharacterType;

    setCharacter(result);
  };

  // can only be used in client side/ react pages
  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <>
      <Head>
        <title key="title">CSR</title>
      </Head>
      {/* here we can have a <Head> but it won't have much effect on crawlers since the site is not rendered when the crawler scraps the info */}
      <div>
        <h1>Client Side Render - CSR</h1>
        <p>This page is rendered by the browser, on the client.</p>
        {/* needs conditional rendering, since this is happening on the client */}
        {character && (
          <div className={styles.card}>
            <p>{character.name}</p>
            <p>{character.status}</p>
          </div>
        )}
      </div>
    </>
  );
}
