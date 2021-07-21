import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";

const FullWebsite: React.FC<any> = () => {

    // Example Object
    const data = [{ title: "How should I ?", para: "Lorem Ipsum ..." }, { title: "How should I ?", para: "Lorem Ipsum ..." }]

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
        <Section
          title="Travel Articles"
          articles={data}
        />
      </main>
    </div>
  );
};

export default FullWebsite;
