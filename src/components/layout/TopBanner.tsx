
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerHeight, setBannerHeight] = useState('48px'); 

  
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 768) { 
        setBannerHeight('56px'); 
      } else {
        setBannerHeight('48px');
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    const effectiveHeight = isVisible && !isScrolled ? bannerHeight : '0px';
    document.documentElement.style.setProperty('--banner-height', effectiveHeight);
    
    return () => {
       document.documentElement.style.setProperty('--banner-height', '0px');
    };
  }, [isVisible, isScrolled, bannerHeight]);

  useEffect(() => {
  if (!isVisible) {
    document.documentElement.style.setProperty('--banner-height', '0px');
  }
}, [isVisible]);

if (!isVisible) return null;

  return (
    
    <div className={`fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white ${bannerHeight === '48px' ? 'h-12' : 'md:h-14'} z-40 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* Adjust padding for mobile (px-2) and larger screens (sm:px-4) */}
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 h-full flex items-center justify-center">
        {/* Centered Text Content - Adjust gap for mobile (gap-x-2) and larger (sm:gap-x-4) */}
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-4 text-center flex-grow">
          <div className="flex items-center gap-x-2 md:gap-x-3">
            <span className="inline-flex items-center">
              {/* Icon can be hidden on very small screens if needed: hidden xs:inline-flex */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path
                  d="M12 4L14.0206 8.81949L19.0211 9.23607L15.1715 12.6805L16.2145 17.7639L12 15.1L7.78555 17.7639L8.82845 12.6805L4.97892 9.23607L9.97937 8.81949L12 4Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {/* Ensure font sizes are responsive */}
            <p className="text-xs sm:text-sm md:text-base font-medium text-center">
              Limited Time Offer: Get a free SEO-optimized Blog Post completely for free!
            </p>
          </div>
          {/* Ensure button padding and text size are suitable for mobile */}
          <a
            href="https://calendly.com/hyperscriber-info/free-introductory-call?preview_source=et_card&month=2025-04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center flex-shrink-0 bg-white hover:bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap id-get-started"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
