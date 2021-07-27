import React from "react";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Main.css";
import Footer from "./Footer";
import Article from "./Article";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

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
        <Route path="/" component={Home} exact />
        <Route path="/:randomWord" component={ErrorPage} exact />
        <Route path="/articles" component={Home} exact />
        <Route path="/articles/:articleName">
          <Navbar />
          <Article /> 
          {/* Footer */}
          <Footer />
        </Route>
      </Router>
    </div>
  );
};

export default FullWebsite;
