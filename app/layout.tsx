import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui";

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


        {/* Scripts externos com melhor performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "6877de3c73930aaed23043b5";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
        
        <script 
          src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js" 
          async 
          defer 
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
