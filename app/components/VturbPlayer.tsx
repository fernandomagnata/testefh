'use client';

import { useEffect, useState } from 'react';

export default function VturbPlayer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after the component has mounted.
    setIsClient(true);
  }, []);

  // On the server, and on the initial client render, render a placeholder.
  if (!isClient) {
    return (
      <div id="ifr_68892802472c92b73bb99bf1_wrapper" style={{ width: '100%', margin: '0 auto' }}>
        <div style={{ padding: '56.25% 0 0 0', position: 'relative', backgroundColor: '#000' }}>
          {/* Optional: Add a loading spinner here */}
        </div>
      </div>
    );
  }

  // Once the component has mounted on the client, render the iframe with the correct src.
  // The 'window' object is now safe to use.
  const iframeSrc = `https://scripts.converteai.net/9731981d-e17b-4330-96ba-c9a74315f15c/players/68892802472c92b73bb99bf1/v4/embed.html?vl=${encodeURIComponent(
    window.location.href
  )}`;

  return (
    <div
      id="ifr_68892802472c92b73bb99bf1_wrapper"
      style={{ width: '100%', margin: '0 auto' }}
    >
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          id="ifr_68892802472c92b73bb99bf1"
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
