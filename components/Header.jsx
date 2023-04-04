import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/" className="homeLink links">
          Harry Coupe
        </Link>
      </h1>
      <p>Web Developer & Design Enthusiast</p>
    </header>
  );
}
