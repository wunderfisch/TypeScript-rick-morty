import Head from "next/head";
import React from "react";
import style from "@/styles/helloworld.module.css";
import { Props } from "next/script";

export default function helloworld({}: Props) {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <div>
        <h1 className={style.myH1}>Next JS Page</h1>
      </div>
    </>
  );
}
