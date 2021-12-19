import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Joinus,
  Projects,
  Events,
  RaiSoden,
  Dullerud,
  Fair2021,
  Info2021,
  Panel2021,
  News,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <p style={{"padding-top": "50px"}}></p>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/joinus" element={<Joinus />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/events" element={<Events />} />
      <Route path="/raisoden" element={<RaiSoden />} />
      <Route path="/dullerud" element={<Dullerud />} />
      <Route path="/fair2021" element={<Fair2021 />} />
      <Route path="/info2021" element={<Info2021 />} />
      <Route path="/panel2021" element={<Panel2021 />} />
      <Route path="/news" element={<News />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
