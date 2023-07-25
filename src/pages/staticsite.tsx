import React from "react";
import styles from "@/styles/card.module.css";
import { GetStaticProps } from "next";

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

interface StaticSiteProps {
  character: CharacterType;
}

// exact this function name! gives a promise
export const getStaticProps: GetStaticProps<StaticSiteProps> = async () => {
  // function used for fetching
  const randomId = Math.floor(Math.random() * 200);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomId}`
  );
  const result = (await response.json()) as CharacterType;

  return {
    props: {
      character: result,
    },
    // revalidate value defines how often(seconds) a new build is done (when a project is deployed)
    revalidate: 60 * 1,
  };
};

function staticsite({ character }: StaticSiteProps) {
  return (
    <>
      <div>
        <h1>staticsite</h1>
        <p>now with random character, every refresh fetches a new character</p>
        <p>
          if in production: site is stored ready build on the server, only new
          build would show new character
        </p>
        <div className={styles.card}>
          <p>{character.name}</p>
          <p>{character.status}</p>
        </div>
      </div>
    </>
  );
}

export default staticsite;
