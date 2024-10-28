import React from 'react';

const NavBar1 = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">HOME</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">ABOUT</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">PRODUCTS</a>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar1;
