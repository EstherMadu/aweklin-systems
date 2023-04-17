import React from "react";

export const Hero = (props) => {
  const { title, image, desc } = props;
  return (
    <article className=" container book ">
      <img src={image} alt={title} className="object-cover" />
      <h2>{title}</h2>
      <h4>{desc}</h4>
    </article>
  );
};
