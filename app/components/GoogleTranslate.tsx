"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Add the Google Translate script
    const addScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,gu',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // Check if script already exists or add it
    if (!window.google?.translate) {
      addScript();
    } else {
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <>
      <div id="google_translate_element"></div>
      <style jsx global>{`
        /* Hide Google Translate banner */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        
        body {
          top: 0 !important;
        }
        
        /* Style the dropdown */
        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: none !important;
          font-size: 14px !important;
          font-family: 'Poppins', sans-serif !important;
        }
        
        .goog-te-menu-value span {
          color: #374151 !important;
        }
        
        .goog-te-gadget-icon {
          display: none !important;
        }
        
        select.goog-te-combo {
          padding: 6px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: white;
          color: #374151;
          font-size: 14px;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          outline: none;
        }
        
        select.goog-te-combo:hover {
          border-color: #6366f1;
        }
        
        select.goog-te-combo:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
      `}</style>
    </>
  );
}
