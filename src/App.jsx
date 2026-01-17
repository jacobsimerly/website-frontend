import { Navigate, Route, Routes } from "react-router-dom";

import SiteLayout from "./layouts/SiteLayout";
import { AboutPage, ContactPage, HomePage, ServicesPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceSlug?" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
