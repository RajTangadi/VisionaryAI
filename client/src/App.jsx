import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
const CreateImage = lazy(() => import("./pages/CreateImage"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateImage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
