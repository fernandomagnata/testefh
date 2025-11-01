import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/app/components/ui";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Magnetismo Oculto',
  description: 'A vibrant sales page to showcase your product.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <head>
        {/* Preconexão e fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Favicon Links */}
        <link rel="icon" href="https://imgur.com/DOgvSRt.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://imgur.com/DOgvSRt.png?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://imgur.com/DOgvSRt.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://imgur.com/DOgvSRt.png?v=1" />
        
        {/* Converte.ai Smart Player */}
        <script 
          src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js" 
          async 
          defer 
        />
        
        {/* Utmify Pixel Code */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "6877de3c73930aaed23043b5";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* Utmify UTMs Script */}
        <Script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '738618361889095');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=738618361889095&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
