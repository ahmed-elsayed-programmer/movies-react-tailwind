import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <nav className="p-4 bg-gray-800 shadow-md">
            <Link to="/" className="text-2xl font-bold text-yellow-400">
              Movie Explorer
            </Link>
          </nav>
          <div className="container mx-auto p-4">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
