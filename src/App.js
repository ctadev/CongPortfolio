import "./styles/app.scss";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProject from "./components/AllProject";
import ScrollToTop from "./components/scrollTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
