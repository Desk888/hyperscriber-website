
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-[92vw] md:w-full px-8 py-8 flex flex-col items-center gap-6 animate-fade-in border border-purple-200">
        <h3 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight text-gray-900 mb-2 text-center">
          We use cookies
        </h3>
        <p className="text-base md:text-lg text-center text-muted-foreground font-medium">
          This website uses cookies to improve your experience. You must accept or decline before continuing.
        </p>
        <div className="flex gap-4 w-full mt-2 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="font-bold py-2 px-6 rounded-lg text-lg"
            onClick={declineCookies}
            autoFocus
          >
            Decline
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-2 px-6 rounded-lg text-lg shadow-button transition duration-200"
            onClick={acceptCookies}
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

