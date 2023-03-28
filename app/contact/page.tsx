"use client";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  return (
    <div>
      <h1>contact</h1>
      <Link href="/">home</Link>
      <Link href={`/blog/yourslugidhere`}>post</Link>
      {/* Programmatic routing */}
      <button onClick={() => router.push('/')}>home</button>
    </div>
  );
}


// Next uses server components by default
// The useRouter hook allows for a router function that essentially uses window.location
// So to utilize this, the component must feature the 'use client' directive/pragma making it a client component
// Otherwise, the server component has no concept of the window/DOM