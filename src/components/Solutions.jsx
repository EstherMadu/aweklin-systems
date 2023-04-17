import React from "react";
import image1 from "../assets/images/apple.png";
import image2 from "../assets/images/orange.png";
import image3 from "../assets/images/white-circle.png";
import image4 from "../assets/images/cloud.png";
import image5 from "../assets/images/consulting.png";
import image6 from "../assets/images/developer.png";
import image7 from "../assets/images/two-factor.png";

export const Solutions = () => {
  return (
    <section className="container solution grid md:grid-cols-12 items-center gap-1">
      <div className="relative lg:ml-44 md:col-span-7">
        <img src={image1} alt="Image 1" className="w-96" />

        <img
          src={image2}
          alt="Image 2"
          className="absolute top-4 left-4 orange-pic rounded-6xl"
        />

        <img src={image3} alt="Image 3" className="absolute top-12 w-20" />
        <img src={image4} alt="Image 4" className="absolute top-12 w-20 p-4" />

        <img
          src={image3}
          alt="Image 3"
          className="absolute top-0 left-80 w-20"
        />
        <img
          src={image7}
          alt="Image 7"
          className="absolute top-0 left-80 w-20 p-2"
        />

        <img
          src={image3}
          alt="Image 3"
          className="absolute bottom-32 right-66 w-20"
        />
        <img
          src={image6}
          alt="Image 6"
          className="absolute bottom-32 right-66 w-20"
        />

        <img
          src={image3}
          alt="Image 3"
          className="relative bottom-24 left-80 w-20"
        />
        <img
          src={image5}
          alt="Image 5"
          className="relative bottom-52 left-80 w-20"
        />
      </div>
      <div className="md:col-span-5">
        <div>
          <h2 className="text-white text-5xl text-center md:text-left">
            The{" "}
            <span className="text-violet-800 w-42 text-5xl font-bold">
              All-In-One
            </span>{" "}
            Solution to all your technical problems
          </h2>
          <div className="bg-white mt-8 rounded-xl p-8">
            <h2 className="text-4xl font-bold">Seamless Collaboration</h2>
            <p className="py-8 text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              laboriosam tempore amet minima, doloremque architecto! Qui
              voluptas autem consequuntur placeat nobis beatae sint possimus
              sed, voluptatum voluptates debitis provident facere!
            </p>
          </div>
          <h2 className="text-white mt-6 text-4xl">Multi Channel Support</h2>
          <div className="border-b-2 border-white my-4"></div>
          <h2 className="text-white mt-6 text-4xl">Seamless Integration</h2>
          <div className="border-b-2 border-white my-4"></div>
          <h2 className="text-white mt-6 text-4xl">Ai Collaboration</h2>
          <div className="border-b-2 border-white my-4"></div>
        </div>
      </div>
    </section>
  );
};
