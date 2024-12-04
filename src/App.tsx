import HomePage from "./pages/home";
import SDRPage from "./pages/SDRPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sdr" element={<SDRPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
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
