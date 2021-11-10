import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from './logo.png'

const Navigation = () => {
  const {user, logout} = useAuth();
    return (
        <div className="text-gray-600 body-font" style={{backgroundColor: '#EDF2F7'}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className="w-8" src={logo} alt="" />
      <span className="ml-3 text-xl">NEX</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Cars</a>
      <a className="mr-5 hover:text-gray-900">Explore</a>
      <a className="mr-5 hover:text-gray-900">About Us</a>
      <a className="mr-5 hover:text-gray-900">Help</a>
    </nav>
    {user?.email ?
    <button onClick={logout} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>
  :
  <Link to="/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    }
    <Link to="register" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Register
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</div>
    );
};

export default Navigation;