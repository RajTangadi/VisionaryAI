import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateImage from "./pages/CreateImage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateImage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
