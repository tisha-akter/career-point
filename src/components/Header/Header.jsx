import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-indigo-50'>
      <div className='container mx-auto px-4 py-3'>
        <header className="flex flex-col w-full md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between md:justify-start px-4 py-3 sm:p-0">
            <div>
              <h1 className="text-black font-bold text-xl">Career Point</h1>
            </div>
            <div className="md:hidden">
              <button type="button" className="text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg py-2 px-4 font-semibold focus:outline-none focus:shadow-outline sm:mb-0">Start Applying</button>
            </div>
            <div className="sm:hidden ml-2 ">
              <button type="button" className="text-gray-600 hover:text-indigo-400 focus:outline-none focus:text-gray-400" onClick={handleMenuClick}>
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 6h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zm0 5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zm15 4h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:w-auto bg-indigo-50 pt-4 sm:pt-0`}>

            <div className="px-2 py-2">
              <Link
                to="/"
                className="text-gray-600 hover:text-indigo-400 font-semibold block sm:inline-block"
                onClick={handleMenuClick}
              >
                Home
              </Link>
            </div>
            <div className="px-2 py-2">
              <Link
                to="/statistics"
                className="text-gray-600 hover:text-indigo-400 font-semibold block sm:inline-block"
                onClick={handleMenuClick}
              >
                Statistics
              </Link>
            </div>
            <div className="px-2 py-2">
              <Link
                to="/applied-jobs"
                className="text-gray-600 hover:text-indigo-400 font-semibold block sm:inline-block"
                onClick={handleMenuClick}
              >
                Applied Jobs
              </Link>
            </div>
            <div className="px-2 py-2">
              <Link
                to="/blog"
                className="text-gray-600 hover:text-indigo-400 font-semibold block sm:inline-block"
                onClick={handleMenuClick}
              >
                Blog
              </Link>
            </div>
          </nav>
          <div className="hidden md:block">
            <button type="button" className="text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg py-2 px-4 font-semibold ml-2 focus:outline-none focus:shadow-outline mb-4 sm:mb-0">Start Applying</button>
          </div>
        </header>
    </div>
    </div>
  );
};

export default Header;




