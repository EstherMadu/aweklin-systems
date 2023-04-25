import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { products } from "./components/data";
import { Services } from "./components/Services";
import { Solutions } from "./components/Solutions";
import { Footer } from "./components/Footer";

export default function App() {
  const Cards = products.map((product) => {
    return <Hero {...product} key={product.id} />;
  });
  return (
    <div>
      <Header />
      <Services />
      <section className="card-list flex justify-center items-center">
        {Cards}
      </section>
      <Solutions />
      <Footer />
    </div>
  );
}
