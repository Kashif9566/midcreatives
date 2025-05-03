import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SlidingButton from './SlidingButton';

const services = [
  { name: 'SEO Services', href: '/services/seo' },
  { name: 'PPC Advertising', href: '/services/ppc-advertising' },
  { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
  { name: 'Content Marketing', href: '/services/content-marketing' },
  { name: 'Email Marketing', href: '/services/email-marketing' },
  { name: 'Content Creation', href: '/services/content-creation' }
];

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // const [showServices, setShowServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleServiceClick = (href: string) => {
    navigate(href);
    // setShowServices(false);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo size={scrolled ? 'small' : 'medium'} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-black_remote px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            {/* <div 
              className="relative group"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button
                className="text-black_remote px-3 py-2 text-sm font-medium inline-flex items-center"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute left-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out transform ${
                  showServices 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
                style={{ top: 'calc(100% + 0.25rem)' }}
              >
                {services.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => handleServiceClick(service.href)}
                    className="block w-full text-left px-4 py-3 text-sm text-black_remote"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div> */}

            <SlidingButton to="/login" text="Login" variant="primary" />
            
            <SlidingButton to="/get-started" text="Get Started" variant="secondary" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Services Menu */}
          <div className="px-3 py-2">
            <span className="text-gray-500 font-medium">Services</span>
            <div className="mt-2 space-y-1">
              {services.map((service) => (
                <button
                  key={service.name}
                  onClick={() => handleServiceClick(service.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Login Button */}
          <div className="px-3 py-2">
            <SlidingButton to="/login" text="Login" variant="primary" />
          </div>
          
          <div className="px-3 py-2">
            <SlidingButton to="/get-started" text="Get Started" variant="secondary" />
          </div>
        </div>
      </div>
    </nav>
  );
}