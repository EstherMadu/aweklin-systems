import React, { useState } from "react";
import logo from "../assets/images/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" container flex items-center justify-between flex-wrap lg:pt-4">
      <div className="flex items-center flex-shrink-0  mr-6 mt-10 lg:mr-96">
        <img src={logo} className="w-28" alt="Logo" />
      </div>
      <div className="block  mt-10 ml- lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            About us
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            Services
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            Solutions
          </a>
        </div>
        <div>
          <button className="inline-flex items-center mt-10 lg:mt-2 bg-fuchsia-600 rounded border-0 py-2 px-4 text-white">
            Reach Out
          </button>
        </div>
      </div>
    </nav>
  );
};
