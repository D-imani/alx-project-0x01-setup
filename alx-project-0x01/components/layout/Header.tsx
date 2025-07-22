import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MyApp</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;