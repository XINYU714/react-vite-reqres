import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container-xxl">
      <Header />
      <Home />
    </div>
  );
}

export default App;
