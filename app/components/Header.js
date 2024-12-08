import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          {" "}
          <h1 className="text-2xl font-serif font-bold text-white">Matrimony</h1>
        </Link>
        <nav className="space-x-4 font-serif font-bold  text-white">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/Login" className="hover:text-black">
            Login
          </Link>
          <Link href="/Register" className="hover:text-black">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
