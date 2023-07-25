import { CharacterType } from "@/@types";
import CharacterCard from "@/components/CharacterCard";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

// interface CharacterType {
//   id: number;
//   name: string;
//   status: string;
//   species: string;
//   type: string;
//   gender: string;
//   // origin: Origin;
//   location: Location;
//   image: string;
//   // episode: [string];
//   url: string;
//   // created: string;
// }

// interface CharacterPageProps {}

// contains the list of paths the fetch is going to prerender (how often the fetch from getStaticProps has to run)
export const getStaticPaths: GetStaticPaths = () => {
  console.log("show this for getStaticPaths function running");
  const idsArray = ["1", "2", "3", "4"];

  // map over array
  const paths = idsArray.map((id) => {
    // create objects, per every property=params + value={identifier + value=result of map}
    return { params: { characterId: id } };
  });
  // return an array of paths to use in getStaticProps
  return {
    paths,
    // nextJS needs a fallback that is a boolean
    fallback: false,
  };
};

// getStaticProps function runs first (see clo)
// nextJS knows that here shall be several pages created dynamicly because the file is named with []
// but we have to tell nextJS how many pages it has to render/how often it has to fetch, this is done with getStaticPaths
export const getStaticProps: GetStaticProps<CharacterType> = async (
  context
) => {
  console.log("context :>> ", context);
  console.log("show this for getStaticProps function running");
  // context holds the id from the url
  const characterId = context.params?.characterId;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  const result: CharacterType = await response.json();
  return {
    props: result,
  };
};

export default function CharacterPage({
  image,
  name,
  status,
  species,
  type,
  id,
  gender,
  origin,
  url,
  location,
}: CharacterType) {
  const router = useRouter();
  //   console.log("router :>> ", router);
  return (
    <div>
      <h1>Page {router.query.characterId}</h1>
      <CharacterCard
        image={image}
        name={name}
        status={status}
        species={species}
        type={type}
        id={id}
        gender={gender}
        origin={origin}
        url={url}
        location={location}
      />
      {/* send props to card component */}
    </div>
  );
}
