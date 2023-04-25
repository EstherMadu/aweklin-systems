import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import motherboard from "../assets/images/motherboard.jpg";

import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <section className=" ">
      <Navbar />

      <div className="container grid md:grid-cols-12 items-center gap-2">
        <div className="md:col-span-7">
          <motion.h2
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left font-sans text-4xl lg:pt-40 text-white hero-text md:font-bold w-11/12 md:text-6xl tracking-wide py-20 md:py-0"
          >
            All in one digital solutions with Aweklin Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" text-left text-white hero-text  md:top-2/3 md:mt-4"
            style={{ width: "400px" }}
          >
            Enabling the future of African prosperity with expert guidance and
            hassle-free solutions.
          </motion.p>
        </div>
        <div className="md:col-span-5">
          <motion.img
            src={motherboard}
            alt="motherboard"
            className="rounded-2xl px-4 pb-6"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};
