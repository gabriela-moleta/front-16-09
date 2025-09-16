import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>CRUD Completo</h1>
      <nav>
        <Link href="/get">GET</Link>
        <br></br>
        <Link href="/post">POST</Link>
        <br></br>
        <Link href="/put">PUT</Link>
        <br></br>
        <Link href="/delete">DELETE</Link>
      </nav>
    </div>
  )
}