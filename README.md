# Vida & Peso — Blog de Saúde & Emagrecimento (Astro + Cloudflare Pages)

Portal de emagrecimento saudável, nutrição baseada em evidências e calculadoras interativas, construído com **Astro (SSG)**, zero frameworks pesados de UI, otimizado para **Cloudflare Pages** com custo operacional zero.

---

## 🚀 Tecnologias Utilizadas

- **Astro 5+ (SSG - Static Site Generation):** Geração 100% estática para velocidade instantânea.
- **Astro Content Layer:** Schemas tipados via Zod com validação rigorosa de frontmatter.
- **Vanilla JS (Astro Islands):** Calculadoras interativas e banner de privacidade leves, executados no client-side (`client:visible`), sem dependências pesadas como React ou Vue.
- **Decap CMS (antigo Netlify CMS):** Painel administrativo gratuito em `/admin` com autenticação GitHub OAuth.
- **Google Analytics 4 (GA4):** Integração com **Google Consent Mode v2** (controle de `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`).
- **Google AdSense:** Slots de publicidade com reserva estrita de espaço em CSS para prevenção total de Cumulative Layout Shift (CLS).
- **SEO Empresarial:** Schema.org (JSON-LD) para `BlogPosting`, `BreadcrumbList`, `Organization` e `WebSite`, Open Graph e sitemap automático.
- **Segurança de Nível Empresarial:** Cabeçalhos `_headers` com CSP restritiva, HSTS (63072000s), no-sniff, frame protection e anti-bot Cloudflare Turnstile.

---

## 📁 Estrutura de Diretórios

```
BlogFitness/
├── public/
│   ├── _headers            # Cabeçalhos de segurança (CSP, HSTS) e cache Cloudflare
│   ├── favicon.svg         # Favicon em SVG
│   ├── robots.txt          # Regras para bots e ponteiro para o sitemap
│   └── admin/
│       ├── index.html      # Interface web do Decap CMS
│       └── config.yml      # Configuração das Content Collections para o CMS
├── src/
│   ├── components/
│   │   ├── Header.astro         # Navegação acessível e responsiva
│   │   ├── Footer.astro         # Rodapé com disclaimer médico YMYL e links legais
│   │   ├── Breadcrumbs.astro    # Navegação estrutural com schema
│   │   ├── TableOfContents.astro# Sumário automático para artigos
│   │   ├── AdSlot.astro         # Bloco AdSense seguro contra CLS
│   │   ├── ProductCTA.astro     # Card de afiliado com rel="sponsored" e tracking GA4
│   │   ├── CookieConsent.astro  # Banner Consent Mode v2
│   │   └── Calculators/
│   │       ├── BmiCalculator.astro       # Calculadora de IMC (padrão OMS + gauge)
│   │       ├── CalorieCalculator.astro   # Calculadora de Calorias (Mifflin-St Jeor)
│   │       └── ProteinCalculator.astro   # Calculadora de Proteína por meta corporal
│   ├── content/
│   │   ├── authors/        # Perfis de autor/revisor com credenciais E-E-A-T
│   │   ├── tools/          # Conteúdo explicativo das calculadoras
│   │   └── posts/          # Artigos em Markdown organizados por categoria
│   ├── layouts/
│   │   ├── BaseLayout.astro# Layout base com meta tags, GA4, AdSense e Schemas
│   │   └── PostLayout.astro# Layout editorial para artigos com TOC, autor e CTAs
│   ├── pages/
│   │   ├── index.astro                 # Página inicial com Hero e destaques
│   │   ├── blog/
│   │   │   ├── index.astro             # Listagem e busca de todos os artigos
│   │   │   └── [...slug].astro         # Rota dinâmica do artigo
│   │   ├── categoria/[categoria].astro # Listagem filtrada por categoria
│   │   ├── ferramentas/
│   │   │   ├── index.astro             # Hub de calculadoras
│   │   │   └── [ferramenta].astro      # Página individual da calculadora
│   │   ├── sobre.astro                 # Página Sobre (E-E-A-T e missão)
│   │   ├── contato.astro               # Formulário de contato e Turnstile
│   │   ├── politica-privacidade.astro  # LGPD, Cookies e AdSense
│   │   ├── termos-de-uso.astro         # Termos de uso e isenção médica
│   │   └── 404.astro                   # Erro 404 customizado
│   ├── styles/
│   │   └── global.css      # Design system editorial minimalista
│   ├── utils/
│   │   ├── constants.ts    # Metadados do site, categorias e IDs
│   │   ├── formatDate.ts   # Formatação de datas em pt-BR
│   │   ├── seo.ts          # Geradores de Schema.org JSON-LD
│   │   └── slug.ts         # Normalização de URLs
│   └── content.config.ts   # Definição e validação de schemas Zod (Content Layer)
├── astro.config.mjs        # Configuração do Astro (sitemap, sharp, output static)
├── package.json
└── tsconfig.json
```

---

## 🛠️ Como Executar Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:4321` no navegador.

3. **Gerar build de produção estático:**
   ```bash
   npm run build
   ```
   Os arquivos finais estáticos serão compilados na pasta `dist/`.

4. **Visualizar o build compilado:**
   ```bash
   npm run preview
   ```

---

## 🌐 Passo a Passo de Deploy na Cloudflare Pages (100% Gratuito)

### Passo 1: Subir o projeto para o GitHub
1. Crie um repositório no GitHub (público ou privado).
2. No terminal da pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit - blog fitness astro"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

### Passo 2: Conectar à Cloudflare Pages
1. Acesse o painel da [Cloudflare](https://dash.cloudflare.com/) e vá em **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Selecione sua conta do GitHub e escolha o repositório criado.
3. Defina as seguintes configurações de compilação:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Em **Environment variables (Variáveis de ambiente)**, adicione:
   - `NODE_VERSION`: `20` (ou superior)
   - `SITE_URL`: `https://seu-subdominio.pages.dev` (ou seu domínio próprio)
5. Clique em **Save and Deploy**. A Cloudflare gerará o deploy em menos de 1 minuto.

### Passo 3: Configurar o Decap CMS com GitHub OAuth
1. Abra `public/admin/config.yml` e ajuste `repo: SEU_USUARIO/SEU_REPOSITORIO`.
2. Para autenticação no GitHub, você pode criar uma **GitHub OAuth App** em **Developer settings** no seu perfil do GitHub e utilizar uma Cloudflare Worker gratuita como backend de autenticação (como o template `decap-cms-cloudflare-oauth`).
3. Uma vez configurado, acesse `https://seu-site.pages.dev/admin` para logar com sua conta GitHub e publicar artigos diretamente pelo navegador.
