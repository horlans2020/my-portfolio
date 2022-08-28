import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
