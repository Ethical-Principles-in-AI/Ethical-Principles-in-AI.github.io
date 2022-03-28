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
  Info2022,
  Panel2021,
  News,
  ReadingGroup,
  ScrollToTop,
  Opportunities,
  DecolonizeAI,
  AuditAI,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <p style={{"padding-top": "50px"}}></p>
    <ScrollToTop />
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
      <Route path="/info2022" element={<Info2022 />} />
      <Route path="/panel2021" element={<Panel2021 />} />
      <Route path="/news" element={<News />} />
      <Route path="/ReadingGroup" element={<ReadingGroup />} />
      <Route path="/Opportunities" element={<Opportunities />} />
      <Route path="/Decolonize_AI" element={<DecolonizeAI />} />
      <Route path="/Audit_AI" element={<AuditAI />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
