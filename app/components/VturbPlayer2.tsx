'use client';

import { useEffect, useState } from 'react';

export default function VturbPlayer2() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      // This effect runs only on the client, after the component has mounted.
      setIsClient(true);
    }, []);
  
    return (
      <div
        id="ifr_68fc136806facf315332e3d5_wrapper"
        style={{ width: '100%', margin: '0 auto' }}
      >
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          {isClient ? (
            <iframe
              id="ifr_68fc136806facf315332e3d5"
              frameBorder="0"
              allowFullScreen
              src={`https://scripts.converteai.net/a1fdd5c4-cb61-4017-af9c-aa97303a27a8/players/68fc136806facf315332e3d5/v4/embed.html?vl=${encodeURIComponent(
                window.location.href
              )}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              referrerPolicy="origin"
            ></iframe>
          ) : (
             <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#000'
            }}>
              {/* Placeholder for server and initial client render */}
            </div>
          )}
        </div>
      </div>
    );
  }
  