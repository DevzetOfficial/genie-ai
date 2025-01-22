import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { ModalProvider } from "@/context/modal-context";
import BeatLoader from "react-spinners/BeatLoader";

const HomePage = lazy(() => import("@/pages/home-page"));
const BlogPage = lazy(() => import("@/pages/blog-page"));
const AISDRPage = lazy(() => import("@/pages/ai-sdr-page"));
const TermsPage = lazy(() => import("@/pages/terms-page"));
const ContactPage = lazy(() => import("@/pages/contact-page"));
const PrivacyPage = lazy(() => import("@/pages/privacy-page"));
const NotFoundPage = lazy(() => import("@/pages/not-found-page"));
const BlogDetailPage = lazy(() => import("@/pages/blog-detail-page"));
const AIPhoneRepresentativePage = lazy(
  () => import("@/pages/ai-phone-representative-page")
);

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

      <ModalProvider>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center bg-[#000917]">
              <BeatLoader color="#ffffff" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/ai-sdr" element={<AISDRPage />} />
            <Route
              path="/ai-phone-representative"
              element={<AIPhoneRepresentativePage />}
            />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ModalProvider>
    </Router>
  );
}

export default App;
