import MyForm from "./pages/form/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MyForm />} />
          <Route path="/main" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
