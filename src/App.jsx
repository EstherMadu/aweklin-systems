import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { products } from "./components/data";
import { Services } from "./components/Services";
import { Solutions } from "./components/Solutions";

export default function App() {
  const Cards = products.map((product) => {
    return <Hero {...product} key={product.id} />;
  });
  return (
    <div className="bg-black">
      <Header />
      <Services />
      <section className="card-list">{Cards}</section>
      <Solutions />
    </div>
  );
}
