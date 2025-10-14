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
      <div id="ifr_68eb36b9b8b4729161c7a349_wrapper" style={{ margin: '0 auto', width: '100%' }}>
        <div style={{ position: 'relative', padding: '56.666666666666664% 0 0 0', backgroundColor: '#000' }} id="ifr_68eb36b9b8b4729161c7a349_aspect">
          {/* Placeholder for SSR */}
        </div>
      </div>
    );
  }

  // Once the component has mounted on the client, render the iframe with the correct src.
  // The 'window' and 'location' objects are now safe to use.
  const iframeSrc = `https://scripts.converteai.net/1c8bde42-1ca2-4c17-89ca-688b9929a687/players/68eb36b9b8b4729161c7a349/v4/embed.html?vl=${encodeURIComponent(
    window.location.href
  )}`;

  return (
    <div id="ifr_68eb36b9b8b4729161c7a349_wrapper" style={{ margin: '0 auto', width: '100%' }}>
      <div style={{ position: 'relative', padding: '56.666666666666664% 0 0 0' }} id="ifr_68eb36b9b8b4729161c7a349_aspect">
        <iframe
          id="ifr_68eb36b9b8b4729161c7a349"
          frameBorder="0"
          allowFullScreen
          src={iframeSrc}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          referrerPolicy="origin"
        ></iframe>
      </div>
    </div>
  );
}
