import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
