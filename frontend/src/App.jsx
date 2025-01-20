import MyForm from "./pages/form/Form";
import HomePage from "./pages/home/Home";
import Videos from "./pages/videos/Videos";
import AllVideos from "./pages/allVideos/AllVideos";
import UserProfile from "./pages/userProfile/UserProfile";
import Create from "./pages/create/Create";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import "./App.css";

const routes = [
  { path: "/", element: <MyForm /> },
  { path: "/main", element: <HomePage /> },
  { path: "/videos/:id", element: <Videos /> },
  { path: "/allvideo", element: <AllVideos /> },
  { path: "/profile", element: <UserProfile /> },
  { path: "/create", element: <Create /> },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
