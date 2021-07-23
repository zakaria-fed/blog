import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";

import "./Main.css";
import Footer from "./Footer";

const FullWebsite: React.FC = () => {
  // Example Object
  const data = [
    {
      title: "How should I ?",
      para: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex.",
      image:
        "https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "How should I ?",
      para: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex.",
      image:
        "https://images.pexels.com/photos/4226100/pexels-photo-4226100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "How should I ?",
      para: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex.",
      image:
        "https://images.pexels.com/photos/4226100/pexels-photo-4226100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  return (
    <div className="fullWebsite">
      {/* Nvabar */}
      <Navbar
        image="https://images.pexels.com/photos/4868826/pexels-photo-4868826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="Zakaria"
      />

      {/* Header */}
      <Header />

      {/* Main */}
      {/* I will create a normal Main div
        => Which will contains multiple sections "Component" (depending on the number of sections in Firebase)  */}
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

export default FullWebsite;
