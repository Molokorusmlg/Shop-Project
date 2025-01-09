import { useState } from "react";
import MyForm from "./componets/form/form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./componets/main/mainPage";
import Card from "./componets/card/cardBase/card";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MyForm />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/card/:id" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
