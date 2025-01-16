import MyForm from "./pages/form/Form";
import HomePage from "./pages/home/Home";
import Videos from "./pages/videos/Videos";
import AllVideos from "./pages/allVideos/AllVideos";
import UserProfile from "./pages/userProfile/UserProfile";
import Create from "./pages/create/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MyForm />} />
          <Route path="/main" element={<HomePage />} />
          <Route path="/videos/:id" element={<Videos />} />
          <Route path="/allvideo" element={<AllVideos />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
