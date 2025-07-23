import { Button } from '@/app/components/ui';
import { FooterSection } from '@/app/components/sections';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <main className="w-full max-w-4xl px-4 md:px-8 flex-grow flex flex-col gap-8 py-16 md:py-24">
        <div className="flex items-center justify-center relative mb-6">
          <Link href="/" className="absolute left-0">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center">Política de Privacidade</h1>
        </div>
        <div className="space-y-8 text-muted-foreground">
          <p>A sua privacidade é de extrema importância para nós. Esta Política de Privacidade descreve como Magnetismo Oculto ("nós", "nosso" ou "nossa") coleta, usa, compartilha e protege as suas informações pessoais quando você visita Magnetismo Oculto (o "Site"), utiliza os nossos serviços ou interage conosco de qualquer forma.</p>
          <p>Ao utilizar o nosso Site e os nossos serviços, você concorda com a coleta e o uso das suas informações de acordo com esta política.</p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações que Coletamos</h2>
            <p>Coletamos diferentes tipos de informações para fornecer e melhorar os nossos serviços para você.</p>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">1.1. Informações Pessoais</h3>
            <p>São informações que podem identificar você diretamente ou indiretamente. Podemos coletar:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Informações de Contato:</strong> Nome completo, endereço de e-mail, número de telefone, endereço de correspondência.</li>
              <li><strong>Informações de Pagamento:</strong> Detalhes de cartão de crédito/débito, informações de faturamento (processadas por um provedor de pagamento seguro, não armazenamos essas informações diretamente em nossos servidores).</li>
              <li><strong>Informações de Pedido:</strong> Detalhes dos produtos adquiridos, histórico de compras.</li>
              <li><strong>Informações de Cadastro:</strong> Nome de usuário e senha (se houver cadastro no site).</li>
              <li><strong>Informações Demográficas:</strong> Idade, gênero (se fornecidas voluntariamente).</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">1.2. Informações de Uso e Dados de Navegação</h3>
            <p>Coletamos automaticamente certas informações quando você acessa e usa o nosso Site, incluindo:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Endereço IP:</strong> O endereço de protocolo da internet do seu dispositivo.</li>
                <li><strong>Tipo de Navegador:</strong> O navegador que você está usando (ex: Chrome, Firefox, Safari).</li>
                <li><strong>Sistema Operacional:</strong> O sistema operacional do seu dispositivo (ex: Windows, macOS, Android, iOS).</li>
                <li><strong>Páginas Visitadas:</strong> As páginas do nosso Site que você visualizou, a ordem em que as visitou e o tempo gasto em cada página.</li>
                <li><strong>Data e Hora de Acesso:</strong> A data e hora em que você acessou o Site.</li>
                <li><strong>Dados de Referência:</strong> O site que o encaminhou para o nosso Site.</li>
                <li><strong>Informações do Dispositivo:</strong> Tipo de dispositivo móvel, identificadores únicos de dispositivo, etc.</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">1.3. Cookies e Tecnologias Semelhantes</h3>
            <p>Utilizamos cookies e tecnologias de rastreamento semelhantes para monitorar a atividade em nosso Site e armazenar certas informações. Cookies são pequenos arquivos de dados colocados em seu dispositivo ou computador que frequentemente incluem um identificador exclusivo anônimo.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Como Usamos Suas Informações</h2>
            <p>Utilizamos as informações coletadas para diversas finalidades, incluindo:</p>
             <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Processar Pedidos e Transações:</strong> Para processar suas compras, enviar confirmações de pedidos e gerenciar entregas.</li>
                <li><strong>Fornecer e Manter o Serviço:</strong> Para operar, manter e melhorar a funcionalidade do nosso Site e serviços.</li>
                <li><strong>Personalizar Sua Experiência:</strong> Para adaptar o conteúdo e as ofertas aos seus interesses.</li>
                <li><strong>Comunicação:</strong> Para enviar informações importantes sobre sua conta, pedidos, atualizações de serviço, newsletters, ofertas promocionais e respostas a suas dúvidas.</li>
                <li><strong>Marketing e Publicidade:</strong> Para exibir anúncios relevantes para você em plataformas como o Facebook, Google e outras redes sociais, com base nos seus interesses e atividades em nosso Site.</li>
                <li><strong>Análise e Pesquisa:</strong> Para entender como os usuários interagem com nosso Site, realizar análises de dados e pesquisas para melhorar nossos produtos e serviços.</li>
                <li><strong>Segurança:</strong> Para prevenir atividades fraudulentas e proteger a segurança do nosso Site e usuários.</li>
                <li><strong>Conformidade Legal:</strong> Para cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Como Compartilhamos Suas Informações</h2>
            <p>Podemos compartilhar suas informações pessoais com terceiros apenas nas seguintes circunstâncias:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Provedores de Serviços:</strong> Compartilhamos informações com empresas e indivíduos terceirizados que nos auxiliam na operação do nosso negócio (ex: processadores de pagamento, empresas de logística, provedores de hospedagem de site, serviços de e-mail marketing, serviços de análise de dados, plataformas de publicidade como Facebook Ads). Esses provedores de serviços têm acesso às suas informações pessoais apenas para executar essas tarefas em nosso nome e são obrigados a não divulgá-las ou usá-las para qualquer outra finalidade.</li>
                <li><strong>Parceiros de Negócios:</strong> Podemos compartilhar informações com parceiros de negócios para oferecer a você certos produtos, serviços ou promoções, sempre com seu consentimento prévio.</li>
                <li><strong>Conformidade Legal e Proteção:</strong> Podemos divulgar suas informações pessoais se exigido por lei ou em resposta a intimações ou ordens judiciais, ou se acreditarmos de boa-fé que tal ação é necessária para cumprir uma obrigação legal, proteger e defender os direitos ou propriedade de Magnetismo Oculto, prevenir ou investigar possíveis irregularidades relacionadas ao Serviço, proteger a segurança pessoal dos usuários do Serviço ou do público, ou proteger-se contra responsabilidade legal.</li>
                <li><strong>Transferências de Negócios:</strong> Em caso de fusão, aquisição ou venda de ativos, suas informações pessoais podem ser transferidas como parte dos ativos. Notificaremos você antes que suas informações pessoais sejam transferidas e se tornem sujeitas a uma Política de Privacidade diferente.</li>
                <li><strong>Com Seu Consentimento:</strong> Podemos compartilhar suas informações para qualquer outra finalidade com o seu consentimento explícito.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Retenção de Dados</h2>
            <p>Manteremos suas informações pessoais apenas pelo tempo necessário para as finalidades estabelecidas nesta Política de Privacidade, incluindo a conformidade com nossas obrigações legais, resolução de disputas e aplicação de nossos acordos.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança dos Dados</h2>
            <p>A segurança das suas informações é muito importante para nós. Empregamos medidas de segurança técnicas e organizacionais razoáveis para proteger as informações que coletamos contra acesso não autorizado, divulgação, alteração ou destruição. No entanto, nenhuma transmissão de dados pela Internet ou método de armazenamento eletrônico é 100% seguro. Portanto, embora nos esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus Direitos de Proteção de Dados (LGPD)</h2>
            <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você possui os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Direito de Confirmação e Acesso:</strong> Confirmar a existência de tratamento e acessar os seus dados pessoais que detemos.</li>
                <li><strong>Direito de Retificação:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                <li><strong>Direito de Anonimização, Bloqueio ou Eliminação:</strong> Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</li>
                <li><strong>Direito à Portabilidade:</strong> Solicitar a portabilidade dos seus dados a outro fornecedor de serviço ou produto.</li>
                <li><strong>Direito à Eliminação:</strong> Solicitar a eliminação dos dados pessoais tratados com o seu consentimento, exceto nas hipóteses previstas em lei.</li>
                <li><strong>Direito à Informação sobre Compartilhamento:</strong> Obter informações sobre as entidades públicas e privadas com as quais o Magnetismo Oculto realizou uso compartilhado de dados.</li>
                <li><strong>Direito de Revogação do Consentimento:</strong> Revogar o seu consentimento a qualquer momento, sem que isso afete a legalidade do tratamento realizado antes da revogação.</li>
                <li><strong>Direito de Oposição:</strong> Opor-se ao tratamento de seus dados pessoais em certas situações.</li>
            </ul>
            <p className="mt-2">Para exercer qualquer um desses direitos, entre em contato conosco através das informações fornecidas na seção "Contato" desta Política de Privacidade. Atenderemos à sua solicitação de acordo com a legislação aplicável.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Links para Outros Sites</h2>
            <p>Nosso Site pode conter links para outros sites que não são operados por nós. Se você clicar em um link de terceiros, será direcionado ao site desse terceiro. Aconselhamos fortemente que você revise a Política de Privacidade de cada site que visitar. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Privacidade de Crianças</h2>
            <p>Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações de identificação pessoal de menores de 18 anos. Se você é pai/mãe ou responsável e tem conhecimento de que seu filho nos forneceu dados pessoais, entre em contato conosco. Se tomarmos conhecimento de que coletamos dados pessoais de crianças sem verificação de consentimento dos pais, tomaremos medidas para remover essas informações de nossos servidores.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações a Esta Política de Privacidade</h2>
            <p>Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página. Aconselhamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As alterações a esta Política de Privacidade são efetivas quando são publicadas nesta página.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contato</h2>
            <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Por e-mail: suporte.magnetismooculto@gmail.com</li>
            </ul>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
