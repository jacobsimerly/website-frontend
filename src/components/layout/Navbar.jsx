import { Link } from "react-router-dom";

export default function Navbar({ isMenuOpen, onToggleMenu }) {
  const COPY = {
    brand: {
      name: "SoulPoint",
    },
    navbar: {
      items: [
        { label: "Home", to: "/" },
        { label: "Services", to: "/services" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
      ],
      cta: "Get Started",
    },
  };

  const navItems = COPY.navbar.items;

  return (
    <nav className="fixed top-0 w-full bg-brand-950/60 backdrop-blur-md border-b border-white/10 z-9999 isolate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-white tracking-tight"
              aria-label="Go to homepage"
            >
              {COPY.brand.name}
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-slate-200/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors hover:cursor-pointer"
            >
              {COPY.navbar.cta}
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={onToggleMenu}
              className="text-gray-300 hover:text-white p-3"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-900/90 border-t border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-slate-200/80 hover:text-white px-3 py-2 text-base font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link
                  to="/contact"
                  className="block w-full bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors hover:cursor-pointer text-center"
                >
                  {COPY.navbar.cta}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
