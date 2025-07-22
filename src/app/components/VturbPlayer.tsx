'use client';

import { useEffect, useRef, useState } from 'react';

export default function VturbPlayer() {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    // This code runs only on the client, after the component has mounted.
    if (typeof window !== 'undefined') {
      const src = `https://scripts.converteai.net/9731981d-e17b-4330-96ba-c9a74315f15c/players/687ec06b1cdf2c545b3df1b0/v4/embed.html?vl=${encodeURIComponent(
        window.location.href
      )}`;
      setIframeSrc(src);
    }
    
    // Also, load the Vturb SDK script
    const script = document.createElement('script');
    script.src =
      'https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Render a placeholder or nothing until the src is ready
  if (!iframeSrc) {
    return (
        <div id="ifr_687ec06b1cdf2c545b3df1b0_wrapper" style={{ width: '100%', margin: '0 auto' }}>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative', backgroundColor: '#000' }}>
                {/* Optional: Add a loading spinner here */}
            </div>
        </div>
    );
  }

  return (
    <div
      id="ifr_687ec06b1cdf2c545b3df1b0_wrapper"
      style={{ width: '100%', margin: '0 auto' }}
    >
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          id="ifr_687ec06b1cdf2c545b3df1b0"
          frameBorder="0"
          allowFullScreen
          src={iframeSrc}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          referrerPolicy="origin"
        ></iframe>
      </div>
    </div>
  );
}
