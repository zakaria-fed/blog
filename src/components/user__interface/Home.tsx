import React from "react";
import Footer from "./Footer";
import { data } from "./FullWebsite";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";

const Home: React.FC = () => {
  return (
    <div className="fullWebsite">
      <Navbar
        image="https://images.pexels.com/photos/4868826/pexels-photo-4868826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="Zakaria"
      />

      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        <Section title="Travel Articles" articles={data} />
        <Section title="Business Articles" articles={data} />
        <Section title="Relations Articles" articles={data} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
