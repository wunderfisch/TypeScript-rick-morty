import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      {/* link from next is static and does not reload like normal href */}
      <Link href="/">Home</Link> {""} |
      <Link href="/clientside">clientside</Link> {""} |
      <Link href="/serverside">serverside</Link>
      {""} |<Link href="/staticsite">staticsite</Link> {""} |
      <Link href="/character">character</Link>
      {/* when using bootstrap we could do:
     <NavLink as={Link} href="/">sth</NavLink> */}
    </nav>
  );
}
