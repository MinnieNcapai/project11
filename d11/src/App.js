// src/App.jsx

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowDetail from "./components/ShowDetails";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import PodcastProvider from "../src/AppDetails/PodacastDetails";

const App = () => {
  return (
    <PodcastProvider>
      <Router>
        <div>
          <Header />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<ShowList />} />
            <Route path="/shows/:id" element={<ShowDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </PodcastProvider>
  );
};

export default App;