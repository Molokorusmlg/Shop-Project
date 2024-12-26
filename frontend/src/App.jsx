import { useState } from "react";
import MyForm from "./componets/form/form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./componets/main/mainPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<MyForm />}></Route>
        </Routes>
        <Routes>
          <Route path="/main" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
