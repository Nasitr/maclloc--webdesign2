import React,{useState} from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Careercourses from "./Page/Careercourses";
import Collegecourses from "./Page/Collegecourses";
import Blog from "./Page/Blog";
import About from "./Page/About";
import Contactus from "./Page/Contactus";
import ReadPython from "./Page/ReadPython";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/careercourse" element={<Careercourses />} />
          <Route path="/collegecourses" element={<Collegecourses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/careercourse/:id" element={<ReadPython />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
