import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import BlogPage from "@/pages/blog-page";
import HomePage from "@/pages/home-page";
import NotFoundPage from "@/pages/not-found-page";
import BlogDetailPage from "@/pages/blog-detail-page";
import AISDRPage from "@/pages/ai-sdr-page";
import AIPhoneRepresentativePage from "@/pages/ai-phone-representative-page";
import ContactPage from "@/pages/contact-page";
import { Toaster } from "@/components/ui/toaster";
// import AIWorker from "./pages/ai-worker";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/ai-sdr" element={<AISDRPage />} />
        {/* <Route path="/ai-worker" element={<AIWorker />} /> */}
        <Route
          path="/ai-phone-representative"
          element={<AIPhoneRepresentativePage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
