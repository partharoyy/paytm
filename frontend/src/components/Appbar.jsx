import { Link } from "react-router-dom";
import { useState } from "react";
import useCheckAuth from "../hooks/useCheckAuth";

const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { userId } = useCheckAuth();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='shadow h-16 flex justify-between items-center px-6 bg-green-50'>
      {/* Logo */}
      <Link
        to='/'
        className='flex items-center justify-center h-full font-extrabold text-3xl text-green-700 hover:text-green-600'
      >
        QuickPay
      </Link>

      {/* Desktop: Display login/register if not logged in */}
      {!userId ? (
        <div className='hidden md:flex items-center space-x-4'>
          <Link
            to='/signin'
            className='px-4 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-500 transition duration-300 ease-in-out'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='px-4 py-2 border border-green-600 text-green-600 rounded-md font-semibold hover:bg-green-100 transition duration-300 ease-in-out'
          >
            Register
          </Link>
        </div>
      ) : (
        /* Mobile Menu for logged in users */
        <div className='relative'>
          {/* User Icon for menu */}
          <button
            onClick={toggleMenu}
            className='flex items-center justify-center h-12 w-12 bg-green-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-all'
          >
            U
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2'>
              <Link to='/dashboard' className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50'>
                Dashboard
              </Link>
              <Link to='/send' className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50'>
                Send Money
              </Link>
              <Link to='/profile' className='block px-4 py-2 text-sm text-gray-700 hover:bg-green-50'>
                Profile
              </Link>
              <button
                className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50'
                onClick={() => {
                  // Handle logout here
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mobile: Display login/register if not logged in */}
      {!userId && (
        <div className='md:hidden flex items-center space-x-2'>
          <Link
            to='/signin'
            className='px-3 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-500 transition duration-300 ease-in-out'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='px-3 py-2 border border-green-600 text-green-600 rounded-md font-semibold hover:bg-green-100 transition duration-300 ease-in-out'
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
};

export default Appbar;
