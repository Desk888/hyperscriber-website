
import React, { useEffect } from 'react';

/**
 * Component that implements various security headers and protections 
 * for the application. This is a client-side implementation that helps
 * enhance security in development. In production, these headers should
 * be set server-side.
 */
const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Apply Content Security Policy
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = 
      "default-src 'self'; " +
      "script-src 'self' https://cdn.gpteng.co https://*.lovable.app 'unsafe-inline'; " + 
      "style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; " +
      "img-src 'self' data: https:; " + 
      "font-src 'self' https://fonts.gstatic.com; " +
      "connect-src 'self' https://*.supabase.co https://hyperscriber-ai.up.railway.app wss://*.supabase.co; " +
      "frame-src 'self'; " +
      "object-src 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self';";
    document.head.appendChild(meta);
    
    // Add X-Content-Type-Options header
    const xContentTypeOptions = document.createElement('meta');
    xContentTypeOptions.httpEquiv = 'X-Content-Type-Options';
    xContentTypeOptions.content = 'nosniff';
    document.head.appendChild(xContentTypeOptions);
    
    // Add X-Frame-Options header
    const xFrameOptions = document.createElement('meta');
    xFrameOptions.httpEquiv = 'X-Frame-Options';
    xFrameOptions.content = 'SAMEORIGIN';
    document.head.appendChild(xFrameOptions);
    
    // Add X-XSS-Protection header
    const xXssProtection = document.createElement('meta');
    xXssProtection.httpEquiv = 'X-XSS-Protection';
    xXssProtection.content = '1; mode=block';
    document.head.appendChild(xXssProtection);
    
    // Add Referrer-Policy header
    const referrerPolicy = document.createElement('meta');
    referrerPolicy.name = 'referrer';
    referrerPolicy.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerPolicy);
    
    // Add Feature-Policy header
    const featurePolicy = document.createElement('meta');
    featurePolicy.httpEquiv = 'Feature-Policy';
    featurePolicy.content = "camera 'none'; microphone 'none'; geolocation 'none'";
    document.head.appendChild(featurePolicy);
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(xContentTypeOptions);
      document.head.removeChild(xFrameOptions);
      document.head.removeChild(xXssProtection);
      document.head.removeChild(referrerPolicy);
      document.head.removeChild(featurePolicy);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default SecurityHeaders;
