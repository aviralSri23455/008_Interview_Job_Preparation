// Filename - App.js

import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  AboutUs,
  OurAim,
} from "./component/pages/About";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./component/pages/services";
import Contact from "./component/pages/contact";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          path="/about-us/aim"
          element={
            <div style={{
              background: "linear-gradient(0deg, rgba(34,193,195,1) 27%, rgba(250,253,45,1) 85%)",
              minHeight: "100vh",
              overflow: "hidden",
            }}>
              <OurAim />
            </div>
          }
        />
        {/* Remove the Services routes */}
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/services/services1"
          element={<ServicesOne />}
        />
        <Route
          path="/services/services2"
          element={<ServicesTwo />}
        />
        <Route
          path="/services/services3"
          element={<ServicesThree />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </Router>
  );
}

export default App;
