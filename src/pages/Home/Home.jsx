import React from "react";
import Hero from "../../components/Home/Hero";
import Popular from "../../components/Home/Popular";
import Comment from "../../components/Home/Comment";

const Home = () => {
  return (
    <section className="font-poppins">
      <Hero />
      <Popular />
      <Comment />
    </section>
  );
};

export default Home;
