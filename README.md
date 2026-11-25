# Portfólio — Felipe Serejo

Site pessoal e link hub: projetos, experiência e contato em uma página, com um caso curto por projeto.

## Rodar

```bash
pnpm install
pnpm dev
```

Abre em `http://localhost:3000`.

## Onde editar

Tudo que é conteúdo está em **`src/data/profile.ts`**:

- `profile` — nome, headline, bio, links, stack, experiências e formação
- `projects` — os seis projetos, com contexto, solução, destaques e links

O layout usa esse arquivo para a home e para as páginas `/projetos/[slug]`.

## Estrutura

- `src/app/page.tsx` — home (hero, links, stack, projetos, experiência, contato)
- `src/app/projetos/[slug]/page.tsx` — caso de cada projeto
- `src/components/project-media.tsx` — screenshot do projeto ou capa CSS de fallback
- `public/avatar.jpg` — foto
- `public/og.png` — imagem de compartilhamento (1200×630)
- `src/app/sitemap.ts` e `src/app/robots.ts` — SEO

## Deploy

1. Suba o repositório no GitHub.
2. Importe na Vercel (projeto `serejo-dev`).
3. Aponte `serejo.is-a.dev` via PR no `is-a-dev/register` com CNAME para a Vercel.
4. Defina `NEXT_PUBLIC_SITE_URL=https://serejo.is-a.dev` nas variáveis da Vercel.

Produção: https://serejo-dev-ruddy.vercel.app
Domínio: https://serejo.is-a.dev (PR `is-a-dev/register#62822`, aguardando revisão)

O layout inclui JSON-LD `Person`, canonical, Open Graph e sitemap para indexação.

## Pendências antes de publicar

- Confirmar se o e-mail `ssh.serejo@gmail.com` pode ficar público.
- O LinkedIn está em `linkedin.com/in/felipe-serejo` (URL atualizada em 24/11/2026).
- Confirmar o mês de início na Fábrica (resultado da seleção em 28/09/2026; o LinkedIn está com ago/2026).
