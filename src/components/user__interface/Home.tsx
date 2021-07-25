import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { data } from "./FullWebsite";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";
import { db } from "../../firebase";
import { Input } from "@material-ui/core";

interface articleNameInter {
  data: {
    category: string;
  };
  id: string;
}

export interface articleInter {
  title: string;
  para: string;
  image: string;
  category: string;
}

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [articlesNameData, setArticlesNameData] = useState<articleNameInter[]>(
    []
  );
  const [articles, setArticles] = useState<articleInter[]>([]);

  // For the Firestore to fetch Articles Names Data
  useEffect(() => {
    db.collection("articles").onSnapshot((snap) =>
      snap.docs.forEach((doc) =>
        setArticlesNameData((prev: any) => [
          ...prev,
          { data: doc.data(), id: doc.id },
        ])
      )
    );
  }, []);

  // For the Firestore to fetch Articles themselves Data
  useEffect(() => {
    db.collection("articles")
      .get()
      .then((snap) =>
        snap.docs.forEach((doc) =>
          doc.ref
            .collection("articles")
            .get()
            .then((snap) =>
              snap.docs.forEach((doc) => {
                setArticles((prev: any) => [...prev, doc.data()]);
              })
            )
        )
      );
  }, []);

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
        {articlesNameData.length > 0 &&
          articles.length > 2 &&
          articlesNameData.map((articleName) => {
            return (
              <Section
                key={Math.random()}
                title={articleName.data.category}
                articles={articles}
              />
            );
          })}{" "}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
