import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";
import { db } from "../../firebase";

export interface articleInter {
  title: string;
  para: string;
  image: string;
  category: string;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<articleInter[]>([]);
  // For the Firestore to fetch Articles themselves Data
  useEffect(() => {
    db.collection("articles")
      .orderBy("category", "asc")
      .get()
      .then((snap: any) => {
        snap.docs.forEach((doc: any) => {
          setArticles((prev: articleInter[]) => [...prev, doc.data()]);
        });
      });
  }, []);

  return (
    <div className="fullWebsite">
      <Navbar />
      {/* Header */}
      <Header /> {/* Main */}
      <main>
        {articles.length > 0 && (
          <Section key={Math.random()} articles={articles} />
        )}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
