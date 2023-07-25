import Link from "next/link";
import React from "react";

type Props = {};

export default function character({}: Props) {
  return (
    <div>
      <h1></h1>
      character
      <Link href="/character/1"> Chracter 1</Link>
      <Link href="/character/2"> Chracter 2</Link>
      <Link href="/character/3"> Chracter 3</Link>
      <Link href="/character/4"> Chracter 4</Link>
      <Link href="/character/5"> Chracter 5</Link>
      <Link href="/character/6 "> Chracter 6</Link>
      <Link href="/character/7"> Chracter 7</Link>
      <Link href="/character/8"> Chracter 8</Link>
      <Link href="/character/9"> Chracter 9</Link>
    </div>
  );
}
