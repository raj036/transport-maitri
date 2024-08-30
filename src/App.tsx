import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import Page4Blank from "./pages/Page4Blank";
import SignUp from "./pages/SignUp";
import Arrival from "./pages/Arrival";
import Departure from "./pages/Departure";
import VerificationPage from "./components/PopUp";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/page-4-blank":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page" element={<Page />} />
      <Route path="/page-4-blank" element={<Page4Blank />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/arrival" element={<Arrival />} />
      <Route path="/departure" element={<Departure />} />
      <Route path="/popup" element={<VerificationPage />} />
    </Routes>
  );
}
export default App;
