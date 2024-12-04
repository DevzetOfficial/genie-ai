import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import SDRPage from "./pages/SDRPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sdr" element={<SDRPage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* <Route
          path="/phone-representative"
          element={<PhoneRepresentativePage />}
        /> */}
        {/* <Route path="/worker" element={<WorkerPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
