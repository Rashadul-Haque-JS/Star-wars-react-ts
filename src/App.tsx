import React from "react";
import CharactersPage from "./components/characterList";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="w-100 h-100">
      <Navbar />
      <div className="container">
        <CharactersPage />
      </div>
    </div>
  );
}

export default App;
