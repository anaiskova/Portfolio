# CV · Anaïs Kovaleski · Data Analyst

Site pessoal em Next.js 15 (App Router), Tailwind CSS v4 e Motion (antigo Framer Motion),
no estilo "Orgânico / Natural" com lavanda no lugar do verde-musgo.

## Como correr

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Onde editar

- **Texto em inglês** (versão principal, em `/`): `content/en.ts`
- **Texto em português** (versão em `/pt`): `content/pt.ts`
- **Texto em francês** (versão em `/fr`): `content/fr.ts`
- **Dados comuns às duas línguas** (nome, email, LinkedIn, ficheiros dos certificados): `content/shared.ts`

Quando mudares alguma coisa, muda nos três ficheiros de língua. Os componentes não têm texto fixo.
- **Cores, sombras e fontes**: `app/globals.css` (bloco `@theme`).
- **Formas orgânicas partilhadas**: `components/ui/shapes.ts`.

## Foto e PDF (opcional)

1. Coloca a foto em `public/foto.jpg` e em `content/shared.ts` muda `photo: undefined` para `photo: "/foto.jpg"`.
2. Coloca o CV em `public/cv.pdf` e em `content/shared.ts` muda `cvPdf: undefined` para `cvPdf: "/cv.pdf"`.
   Aparece um botão "Descarregar CV" no topo.

## Pesquisa e partilha (SEO)

- **Endereço do site**: `siteUrl` em `content/shared.ts`. Se comprares um domínio próprio, muda só aqui.
- **Imagens de partilha** (LinkedIn, WhatsApp…): `public/og/en.png`, `pt.png` e `fr.png` (1200×630).
- **Favicon**: `app/icon.svg`, `app/favicon.ico` e `app/apple-icon.png`.
- **Títulos, descrições, canónicas e línguas alternativas**: `lib/seo.ts`.
- **Dados estruturados (schema.org/Person)**: `components/StructuredData.tsx`.
- **Sitemap e robots**: `app/sitemap.ts` e `app/robots.ts` (ficam em /sitemap.xml e /robots.txt).
- **Página 404**: `app/not-found.tsx`.

## Publicar

A forma mais simples é a Vercel: cria um repositório no GitHub com esta pasta,
entra em vercel.com, importa o repositório e carrega em Deploy.

## Estrutura

```
app/
  globals.css      tokens de design, grão de papel
  [lang]/          uma página por língua (en e pt), com o idioma certo declarado
lib/
  fonts.ts         fontes (Fraunces + Nunito)
components/
  Site.tsx         a página completa, numa língua
  LanguageSwitch.tsx  botões EN / PT / FR
  Nav.tsx          navegação em pílula flutuante + menu móvel
  Hero.tsx         apresentação com retrato orgânico animado
  About.tsx        sobre mim + números
  Skills.tsx       ferramentas por nível + competências
  Experience.tsx   linha temporal que se desenha com o scroll
  Education.tsx    formação, certificações, idiomas, publicações
  Projects.tsx     projetos de investigação (citados na experiência)
  Contact.tsx      contacto + rodapé
  ui/              Blob, Button, Section, formas partilhadas
content/
  en.ts / pt.ts / fr.ts  todo o texto, em cada língua
  languages.ts     lista das línguas do botão EN / PT / FR
  shared.ts        dados comuns e certificados
  types.ts         formato que as duas línguas seguem
```

Acessibilidade: respeita "reduzir movimento" do sistema, foco visível em todos os links,
link para saltar para o conteúdo e contraste AA em todo o texto.
