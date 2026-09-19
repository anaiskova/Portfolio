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

- **Todo o texto do CV**: `content/cv.ts`. Os componentes não têm texto fixo.
- **Cores, sombras e fontes**: `app/globals.css` (bloco `@theme`).
- **Formas orgânicas partilhadas**: `components/ui/shapes.ts`.

## Foto e PDF (opcional)

1. Coloca a foto em `public/foto.jpg` e em `content/cv.ts` muda `photo: undefined` para `photo: "/foto.jpg"`.
2. Coloca o CV em `public/cv.pdf` e muda `cvPdf: undefined` para `cvPdf: "/cv.pdf"`.
   Aparece um botão "Descarregar CV" no topo.

## Publicar

A forma mais simples é a Vercel: cria um repositório no GitHub com esta pasta,
entra em vercel.com, importa o repositório e carrega em Deploy.

## Estrutura

```
app/
  globals.css      tokens de design, grão de papel
  layout.tsx       fontes (Fraunces + Nunito), metadados
  page.tsx         composição das secções
components/
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
  cv.ts            todo o conteúdo
```

Acessibilidade: respeita "reduzir movimento" do sistema, foco visível em todos os links,
link para saltar para o conteúdo e contraste AA em todo o texto.
