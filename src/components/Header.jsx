import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  const navItems = ['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Karan</h1>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;