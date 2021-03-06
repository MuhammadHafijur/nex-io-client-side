import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from './logo.png'

const Navigation = () => {
  const {user, logout} = useAuth();
    return (
        <div className="text-gray-600 bg-gray-50">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className="w-8" src={logo} alt="" />
      <span className="ml-3 text-xl font-semibold">NeX</span>
    </Link>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link to="/cars" className="mr-5 text-lg font-semibold hover:text-gray-900">Cars</Link>
      <Link to="/explore" className="mr-5 text-lg font-semibold hover:text-gray-900">Explore</Link>
    </nav>
    {user?.email ?
    <div className="">
      <Link to="/" className="mr-5 text-lg font-semibold text-gray-700 hover:text-gray-900">{user.displayName}
          </Link>
      <button onClick={logout} className="inline-flex text-lg font-semibold items-center border-0 focus:outline-none hover:text-gray-800 rounded mt-4 md:mt-0">Logout
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>
  <Link to="/dashboard" className="text-lg font-semibold inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-gray-800 rounded text-base mt-4 md:mt-0">Dashboard
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    </div>
  :
  <div>
  <Link to="/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    <Link to="register" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Register
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
    </div>
    }
    
  </div>
</div>
    );
};

export default Navigation;