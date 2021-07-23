import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Main.css";
import Footer from "./Footer";
import Article from "./Article";
import Login from "../authentification/Login";
import Signup from "../authentification/Signup";
import Home from "./Home";

export const data = [
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

const FullWebsite: React.FC = () => {
  // Example Object

  return (
    <div className="fullWebsite">
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} exact />
        <Route path="/articles/:articleName">
          <Navbar
            image="https://images.pexels.com/photos/4868826/pexels-photo-4868826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            username="Zakaria"
          />
          <Article
            title="How to Rise Childen"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ullam quasi beatae dignissimos, officiis eaque, at laborum mollitia voluptate facilis pariatur eum omnis nostrum non ducimus explicabo. Doloribus, fugit culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ullam quasi beatae dignissimos, officiis eaque, at laborum mollitia voluptate facilis pariatur eum omnis nostrum non ducimus explicabo. Doloribus, fugit culpa."
            image="https://images.pexels.com/photos/4226100/pexels-photo-4226100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />

          {/* Footer */}
          <Footer />
        </Route>
      </Router>
    </div>
  );
};

export default FullWebsite;
