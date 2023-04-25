// import React from "react";

// export const Hero = (props) => {
//   const { title, image, desc } = props;
//   return (
//     <article className=" container book ">
//       <img
//         src={image}
//         alt={title}
//         className="object-cover"
//         style={{ height: "200px" }}
//       />
//       <div className="py-8">
//         <h2>{title}</h2>
//         <h4>{desc}</h4>
//       </div>
//     </article>
//   );
// };

import React from "react";

export const Hero = (props) => {
  const { title, image, desc } = props;
  return (
    <article className="container book ">
      <img
        src={image}
        alt={title}
        className="object-cover"
        style={{ height: "200px" }}
      />
      <div className="py-8 flex-shrink-0">
        <h2>{title}</h2>
        <h4>{desc}</h4>
      </div>
    </article>
  );
};
