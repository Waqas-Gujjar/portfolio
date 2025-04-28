import { FiMenu, FiX } from "react-icons/fi"

interface NavbarProps {
  isOpen: boolean
  toggleMenu: () => void
}

const Navbar = ({ isOpen, toggleMenu }: NavbarProps) => {
  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isOpen) toggleMenu();
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="font-bold text-xl text-[#4F46E5] cursor-pointer"
            >
              Waqas Younas
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.to}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.to);
                  }}
                  className="text-gray-700 hover:text-[#4F46E5] px-3 py-2 text-sm font-medium cursor-pointer transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#4F46E5] focus:outline-none"
            >
              {isOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.to}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.to);
              }}
              className="text-gray-700 hover:text-[#4F46E5] block px-3 py-2 text-base font-medium cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 