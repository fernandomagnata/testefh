import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/app/components/ui";
import Script from 'next/script'; // 1. Verifique se 'Script' está importado

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
        {/* ... (suas fontes e favicons continuam aqui) ... */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        <link rel="icon" href="https://imgur.com/DOgvSRt.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://imgur.com/DOgvSRt.png?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://imgur.com/DOgvSRt.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://imgur.com/DOgvSRt.png?v=1" />

        {/* Script "converteai" */}
        <Script 
          src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js" 
          strategy="afterInteractive" 
          async 
          defer 
        />
        
        {/* --- INÍCIO DO PIXEL UTMIFY (CORRIGIDO) --- */}

        {/* 2. Define o ID do pixel. 
            "beforeInteractive" garante que a variável exista antes 
            que o script principal tente usá-la. */}
        <Script id="set-utmify-pixel-id" strategy="beforeInteractive">
          {`
            window.pixelId = "6877de3c73930aaed23043b5";
          `}
        </Script>

        {/* 3. Carrega o script do pixel.
            Usamos 'afterInteractive' para não bloquear o carregamento da página. */}
        <Script 
          id="load-utmify-pixel"
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
          async
          defer
        />
        {/* --- FIM DO PIXEL UTMIFY --- */}

      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}