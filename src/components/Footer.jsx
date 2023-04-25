import React from "react";
import codeImg from "../assets/images/analytics.jpg";

export const Footer = () => {
  return (
    <footer className="text-white py-16">
      <div
        className="bg-fixed bg-center bg-cover h-96 w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${codeImg})`,
        }}
      >
        <div className="container mx-auto  h-full flex items-center gap-8 ">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text w-72">
            Aweklin Systems
          </h2>
          <div>
            <ul>
              <li>It Strategy Development</li>
              <li>Process Modelling And Optimization</li>
              <li>Systems Development</li>
              <li>Big Data & Analytics</li>
              <li>Data Management & Repositories</li>
              <li>Cloud Services</li>
              <li>Enterprise Architecture Development</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 ">
        <p className="text-center">
          &copy; Aweklin Systems {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
