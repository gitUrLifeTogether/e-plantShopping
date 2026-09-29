import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Bring the beauty of nature into your home with our carefully
            selected collection of beautiful houseplants. From aromatic and
            medicinal plants to decorative favorites, Paradise Nursery helps
            you create a healthier and greener living space.
          </p>

          <AboutUs />

          <Link to="/plants" className="get-started-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<CartItem />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;