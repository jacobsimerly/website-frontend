import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import PageShell from "../components/layout/PageShell";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const hash = location.hash;

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = hash.startsWith("#") ? hash.slice(1) : hash;

    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const navEl = document.querySelector("nav");
        const navHeight = navEl?.offsetHeight ?? 0;
        const extraOffset = 16;
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight -
          extraOffset;

        window.scrollTo({
          top: Math.max(0, y),
          left: 0,
          behavior: "smooth",
        });
      }
    };

    requestAnimationFrame(() => requestAnimationFrame(scroll));
  }, [location.pathname, location.hash]);

  return (
    <PageShell>
      <Navbar
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((v) => !v)}
      />
      <Outlet />
      <Footer />
    </PageShell>
  );
}
