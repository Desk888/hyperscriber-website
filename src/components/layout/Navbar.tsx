
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed left-0 right-0 z-50 w-full transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
      style={{ top: 'var(--banner-height, 0px)' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center z-30 gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="https://hyperscriber-assets-cdn.s3.eu-west-2.amazonaws.com/logo.png" alt="HyperScriber Logo" className="h-20 w-10 object-contain" />
          <span className="text-xl md:text-2xl font-bold text-black">
            HyperScriber
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-base font-medium transition-colors hover:text-primary relative group',
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              )}
              onClick={() => window.scrollTo(0, 0)}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
          <a href="https://calendly.com/hyperscriber-info/free-introductory-call?preview_source=et_card&month=2025-04" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-4 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 text-md hover:scale-110 transition-transform duration-200 id-book-call">
              Book a Call
            </button>
          </a>
        </div>

        {/* Mobile Navigation using Sheet component for swipe gesture support */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="text-primary p-1"
                aria-label="Toggle Menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full p-0">
              <div className="pt-14 pb-6 px-6">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={cn(
                        'py-3 px-2 transition-colors text-base font-medium rounded-md',
                        location.pathname === link.path 
                          ? 'text-blue-700 bg-blue-50' 
                          : 'text-muted-foreground hover:bg-blue-50/50'
                      )}
                      onClick={() => { window.scrollTo(0, 0); }}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t">
                    <a href="https://calendly.com/hyperscriber-info/free-introductory-call?preview_source=et_card&month=2025-04" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full rounded-full py-6 text-base bg-gradient-to-r from-blue-600 to-blue-700 id-book-consultation">
                        Book a Free Consultation
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
