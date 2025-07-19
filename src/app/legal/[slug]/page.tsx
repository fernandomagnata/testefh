
import { Button } from '@/app/components/ui';
import { FooterSection } from '@/app/components/sections';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function PoliticaDePrivacidadeContent() {
    return (
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
    )
}

function TermosDeUsoContent() {
    return (
        <div className="space-y-8 text-muted-foreground">
          <p>Bem-vindo(a) ao Magnetismo Oculto ("Site"), operado por Magnetismo Oculto ("nós", "nosso" ou "nossa"). Estes Termos de Uso ("Termos") regem o seu acesso e uso do nosso Site, produtos e serviços.</p>
          <p>Ao acessar ou usar nosso Site e nossos serviços, você concorda em estar vinculado a estes Termos. Se você não concordar com qualquer parte destes Termos, você não deve acessar o Site ou utilizar nossos serviços.</p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p>Ao criar uma conta, fazer uma compra ou simplesmente navegar em nosso Site, você declara que leu, compreendeu e concordou com estes Termos de Uso, bem como com nossa Política de Privacidade. Caso você não concorde com qualquer disposição destes Termos, por favor, não utilize nosso Site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Condições de Uso do Site</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">2.1. Elegibilidade</h3>
            <p>Para utilizar nosso Site e realizar compras, você deve ter no mínimo 18 (dezoito) anos de idade ou ter a idade legal para formar um contrato vinculativo em sua jurisdição. Ao utilizar nosso Site, você declara e garante que atende a este requisito de idade.</p>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">2.2. Cadastro de Conta</h3>
            <p>Alguns recursos do Site podem exigir que você crie uma conta. Ao se cadastrar, você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Fornecer informações verdadeiras, precisas, atuais e completas sobre você, conforme solicitado no formulário de registro.</li>
              <li>Manter a segurança da sua senha e identificação.</li>
              <li>Manter suas informações de registro atualizadas.</li>
              <li>Ser totalmente responsável por todas as atividades que ocorrerem em sua conta.</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">2.3. Conduta do Usuário</h3>
            <p>Você concorda em usar o Site apenas para fins lícitos e de maneira que não infrinja os direitos de, nem restrinja ou iniba o uso e o aproveitamento do Site por terceiros. A conduta proibida inclui assediar ou causar aflição ou inconveniência a qualquer pessoa, transmitir conteúdo obsceno ou ofensivo, ou interromper o fluxo normal de diálogo dentro do nosso Site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Propriedade Intelectual</h2>
            <p>Todo o conteúdo presente no Site, incluindo, mas não se limitando a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade de Magnetismo Oculto ou de seus fornecedores de conteúdo e é protegido por leis de direitos autorais e outras leis de propriedade intelectual.</p>
            <p>Você não pode reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do Serviço, uso do Serviço ou acesso ao Serviço sem nossa permissão expressa por escrito.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Produtos e Serviços</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">4.1. Descrição dos Produtos</h3>
            <p>Nós nos esforçamos para ser o mais precisos possível na descrição dos nossos produtos. No entanto, não garantimos que as descrições dos produtos ou outros conteúdos do Site sejam totalmente precisos, completos, confiáveis, atuais ou livres de erros. As imagens dos produtos são meramente ilustrativas e podem não corresponder exatamente ao produto final.</p>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.2. Preços</h3>
            <p>Todos os preços exibidos no Site estão em BRL (Real Brasileiro) e estão sujeitos a alterações sem aviso prévio. Não somos responsáveis por erros tipográficos nos preços.</p>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.3. Compra e Pagamento</h3>
            <p>Ao realizar uma compra em nosso Site, você concorda em fornecer informações de pagamento válidas e precisas. Todas as transações são processadas por meio de gateways de pagamento seguros. Não armazenamos seus dados de cartão de crédito em nossos servidores.</p>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">4.4. Cancelamento e Reembolso</h3>
            <p>Nossa política de cancelamento e reembolso é detalhada na nossa página de garantia. Ao realizar uma compra, você concorda com os termos lá estabelecidos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Isenção de Garantias</h2>
            <p>O Site e todos os produtos e serviços disponibilizados através dele são fornecidos "como estão" e "conforme disponíveis", sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não se limitando a garantias de comercialização, adequação a uma finalidade específica, não infração ou curso de desempenho.</p>
            <p>Não garantimos que: (a) o Site operará de forma ininterrupta, segura ou disponível em qualquer momento ou local específico; (b) quaisquer erros ou defeitos serão corrigidos; (c) o Site esteja livre de vírus ou outros componentes nocivos; ou (d) os resultados do uso do Site atenderão às suas necessidades.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitação de Responsabilidade</h2>
            <p>Em nenhuma circunstância Magnetismo Oculto, seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes de (a) seu acesso ou uso ou incapacidade de acessar ou usar o Site; (b) qualquer conduta ou conteúdo de terceiros no Site; (c) qualquer conteúdo obtido do Site; e (d) acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Links para Outros Sites</h2>
            <p>Nosso Site pode conter links para sites de terceiros ou serviços que não são de propriedade ou controlados por Magnetismo Oculto.</p>
            <p>Magnetismo Oculto não tem controle e não assume responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros. Você reconhece e concorda que Magnetismo Oculto não será responsável, direta ou indiretamente, por qualquer dano ou perda causada ou alegadamente causada por ou em conexão com o uso ou dependência de qualquer conteúdo, bens ou serviços disponíveis em ou através de quaisquer desses sites ou serviços.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Lei Aplicável e Foro</h2>
            <p>Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, independentemente de suas disposições sobre conflitos de leis.</p>
            <p>Qualquer disputa decorrente ou relacionada a estes Termos será submetida ao foro da comarca de São Paulo, SP, com exclusão de qualquer outro, por mais privilegiado que seja.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Disposições Gerais</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">9.1. Acordo Integral</h3>
            <p>Estes Termos e nossa Política de Privacidade constituem o acordo integral entre você e Magnetismo Oculto em relação ao nosso Site e substituem todos os acordos anteriores ou contemporâneos, comunicações e propostas, sejam orais ou escritas, entre você e Magnetismo Oculto.</p>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">9.2. Não Renúncia</h3>
            <p>Nenhuma renúncia a qualquer termo destes Termos será considerada uma renúncia adicional ou contínua de tal termo ou de qualquer outro termo, e o não exercício de qualquer direito ou disposição sob estes Termos não constituirá uma renúncia de tal direito ou disposição.</p>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">9.3. Nulidade</h3>
            <p>Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal de jurisdição competente, as demais disposições destes Termos permanecerão em pleno vigor e efeito.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Alterações a Estes Termos</h2>
            <p>Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor. O que constitui uma alteração material será determinado a nosso exclusivo critério.</p>
            <p>Ao continuar a acessar ou usar nosso Site após essas revisões entrarem em vigor, você concorda em ficar vinculado aos termos revisados. Se você não concordar com os novos termos, pare de usar o Site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contato</h2>
            <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Por e-mail: suporte.magnetismooculto@gmail.com</li>
            </ul>
          </section>
        </div>
    )
}

const pages = {
    'politica-de-privacidade': {
        title: 'Política de Privacidade',
        content: <PoliticaDePrivacidadeContent />
    },
    'termos-de-uso': {
        title: 'Termos de Uso',
        content: <TermosDeUsoContent />
    }
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const page = pages[params.slug as keyof typeof pages];

  if (!page) {
    return <div>Página não encontrada</div>
  }

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
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center">{page.title}</h1>
        </div>
        {page.content}
      </main>
      <FooterSection />
    </div>
  );
}
