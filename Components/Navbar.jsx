import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-6">
            <Link
              href="/home"
              className="hover:text-purple-300 transition duration-150 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-purple-300 transition duration-150 font-medium"
            >
              About
            </Link>
            <Link
              href="/movies"
              className="hover:text-purple-300 transition duration-150 font-medium"
            >
              Movies
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hover:text-purple-300 transition duration-150 font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-white/10 text-white font-medium px-4 py-2 rounded-md hover:bg-white/20 transition duration-150 hidden sm:block"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
