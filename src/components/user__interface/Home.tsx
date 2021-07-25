import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { data } from "./FullWebsite";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";
import { db } from "../../firebase";

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [articlesData, setArticlesData] = useState<{category: string}[]>();

  // For the Firestore to fetch Articles Data
  useEffect(() => {
    db.collection("articles").onSnapshot((snap) =>
      snap.docs.forEach((doc) => setArticlesData((prev):{category: string}[] => [...prev, doc.data()])
    );
  }, []);

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
        {/* Search Component */}
        <form>
          <input
            type="text"
            value={searchText}
            onChange={(e: any) => setSearchText(e.target.value)}
          />
        </form>

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
