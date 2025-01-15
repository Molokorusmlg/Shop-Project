import MyForm from "./pages/form/Form";
import HomePage from "./pages/home/Home";
import Videos from "./pages/videos/Videos";
import AllVideos from "./pages/allVideos/AllVideos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MyForm />} />
          <Route path="/main" element={<HomePage />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/allvideo" element={<AllVideos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
