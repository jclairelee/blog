import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Post from "./pages/post/Post";
import Landing from "./pages/landing/Landing";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/write" element={<Post />} />
          <Route path="/posts/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
