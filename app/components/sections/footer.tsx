import Link from "next/link";
import { Button } from "@/app/components/ui";

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
      <div className="container mx-auto max-w-5xl text-center text-xs text-muted-foreground/70 mt-8 space-y-4 px-4">
        <p>
          ESTE SITE NÃO É do FACEBOOK: Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da FACEBOOK, Inc.
        </p>
        <p>
          Os resultados referentes ao serviço foram avaliados e comprovados por nossos clientes. Não garantimos os resultados iguais para todos, estes variam de pessoa para pessoa dependendo de diversos fatores individuais. As informações fornecidas neste site destina-se ao seu conhecimento geral e não garantimos um resultado específico, todo resultado será de inteira responsabilidade do cliente. Essa página/produto não tem vínculo com o Facebook.
        </p>
      </div>
    </footer>
  );
}
