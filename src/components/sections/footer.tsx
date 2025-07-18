import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="w-full bg-background py-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <p>Magnetismo Oculto © 2025</p>
        <div className="flex justify-center gap-2">
          <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">
            Política de Privacidade
          </Link>
          <span>|</span>
          <Link href="/termos-de-uso" className="hover:text-primary transition-colors">
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
