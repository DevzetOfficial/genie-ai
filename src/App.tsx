import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AISDRPage from "./pages/AISDRPage";
import HomePage from "./pages/home";
import AIPhoneRepresentPage from "./pages/AIPhoneRepresentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sdr" element={<AISDRPage />} />
        {/* <Route
          path="/ai-phone-representitive"
          element={<AIPhoneRepresentPage />}
        /> */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route
          path="/phone-representative"
          element={<AIPhoneRepresentPage />}
        />
        {/* <Route path="/worker" element={<WorkerPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
