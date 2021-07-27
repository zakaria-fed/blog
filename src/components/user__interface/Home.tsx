import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { data } from "./FullWebsite";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";
import { db } from "../../firebase";
import { Input } from "@material-ui/core";

export interface articleInter {
  title: string;
  para: string;
  image: string;
  category: string;
}

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState<articleInter[]>([]);

  // For the Firestore to fetch Articles themselves Data
  useEffect(() => {
    db.collection("articles")
      .orderBy("category", "asc")
      .get()
      .then((snap: any) =>
        snap.docs.forEach((doc: any) =>
          setArticles((prev: articleInter[]) => [...prev, doc.data()])
        )
      );
  }, []);

  // Sort Articles :
  const sortArticles = (articles: articleInter[]) => {
    for (let i = 0; i < articles.length; i++) {
      if ((i = 0)) {
        let cat = articles[0].category;
      }
    }
  };

  return (
    <div className="fullWebsite">
      <Navbar
        image="https://images.pexels.com/photos/4868826/pexels-photo-4868826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="Zakaria"
      />{" "}
      {/* Header */}
      <Header /> {/* Main */}
      <main>
        {" "}
        {/* Search Component */}
        {/* <form>
          <Input
            type="text"
            value={searchText}
            onChange={(e: any) => setSearchText(e.target.value)}
          />
        </form> */}
        {articles.length > 0 && (
          <Section
            key={Math.random()}
            title={articles[0].category}
            articles={articles}
          />
        )}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
