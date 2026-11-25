export const profile = {
  name: "Felipe Serejo",
  fullName: "Felipe Gabriel Serejo de Andrade",
  role: "Desenvolvedor Web",
  headline:
    "Desenvolvedor Web · TypeScript, Next.js e Laravel · Fábrica de Software UniFacema · SAAE · ADS",
  location: "Caxias – MA",
  email: "ssh.serejo@gmail.com",
  bio: "Construo sistemas de ponta a ponta — do modelo de dados à interface. Na Fábrica de Software da UniFacema e no setor de TI da SAAE Caxias, transformo processo manual em software com TypeScript, Next.js e Laravel.",
  status: "Aberto a estágio e projetos",
  links: {
    github: "https://github.com/sshs3rejo",
    linkedin: "https://www.linkedin.com/in/felipe-serejo/",
    instagram: "https://www.instagram.com/sshs3rejo",
    email: "mailto:ssh.serejo@gmail.com",
  },
  stack: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
    "Laravel",
    "PHP",
    "C#",
    ".NET",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Linux",
    "Git",
  ],
  experience: [
    {
      org: "Fábrica de Software UniFacema",
      role: "Programador em Banco de Dados",
      period: "2026 — atual",
      description:
        "Programador em Banco de Dados. Modelagem e desenvolvimento de bancos de dados e resolução de demandas internas da fábrica.",
    },
    {
      org: "SAAE Caxias",
      role: "Desenvolvedor de Sistemas · TI",
      period: "ago 2025 — atual",
      description:
        "Setor de TI. Desenvolvimento de sistemas e automações internas, do modelo de dados à interface.",
    },
  ],
  education: {
    course: "Análise e Desenvolvimento de Sistemas",
    school: "UniFacema",
    period: "ago 2025 — dez 2027",
    short: "ADS · 3/5",
  },
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  tags: string[];
  repo?: string;
  demo?: string;
  demoLabel?: string;
  cover?: string;
  status: string;
  featured?: boolean;
  image: string;
  context: string;
  solution: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "organizacao-estudantil",
    title: "Sistema de Organização Estudantil",
    summary:
      "Plataforma para organizar tarefas, prazos e a rotina de estudos. MVP apresentado na certificação intermediária de ADS.",
    year: "2026",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    repo: "https://github.com/sshs3rejo/Sistema_de_Organizacao_Estudantil",
    demo: "https://sistema-de-organizacao-estudantil.vercel.app/",
    cover: "/projetos/sistema-estudantil.png",
    status: "no ar",
    featured: true,
    image:
      "https://opengraph.githubassets.com/1/sshs3rejo/Sistema_de_Organizacao_Estudantil",
    context:
      "A rotina de um estudante de ADS espalha prazos entre caderno, calendário e mensagens. O MVP precisava centralizar isso em uma interface simples, sem depender de planilha.",
    solution:
      "Aplicação Next.js com modelo de dados para disciplinas, tarefas e prazos, interface responsiva em Tailwind e deploy contínuo na Vercel. Foi apresentada à banca da certificação intermediária do curso.",
    highlights: [
      "Modelo de dados pensado para disciplinas, tarefas e prazos",
      "Interface responsiva com Tailwind",
      "Deploy ativo na Vercel",
    ],
  },
  {
    slug: "alem-do-silencio",
    title: "Além do Silêncio — Caso 001",
    summary:
      "Jogo de investigação educativa em Godot sobre saúde sexual feminina. Mesa 3D como hub e fases em documentos 2D.",
    year: "2026",
    tags: ["Godot 4", "GDScript", "3D", "Game Design"],
    cover: "/projetos/caso001.png",
    status: "cliente",
    featured: true,
    image: "/projetos/caso001.png",
    context:
      "O desafio era transformar um tema sensível — anorgasmia feminina — em um caso educativo jogável, sem tom de aula ou panfleto.",
    solution:
      "Jogo em Godot 4.7.2 com uma mesa 3D como hub de investigação. As cinco fases são documentos 2D sobrepostos; a Fase 3 inclui um modelo pélvico 3D interativo e a Fase 4 reúne recursos de cuidado, com timer de respiração 4–2–6 e biofeedback.",
    highlights: [
      "Mesa 3D como hub e cinco fases em documentos 2D",
      "Modelo pélvico 3D interativo na Fase 3",
      "Timer de respiração 4–2–6 e biofeedback",
      "Build para Linux e Windows",
    ],
  },
  {
    slug: "backup-orchestrator",
    title: "Backup Orchestrator",
    summary:
      "Painel para agendar, executar e acompanhar backups de bancos self-hosted e na nuvem, com destino no Google Drive.",
    year: "2026",
    tags: ["Next.js 16", "Prisma", "PostgreSQL", "rclone"],
    repo: "https://github.com/sshs3rejo/backup-orchestrator",
    cover: "/projetos/backup.png",
    status: "open source",
    featured: true,
    image:
      "https://opengraph.githubassets.com/1/sshs3rejo/backup-orchestrator",
    context:
      "Backup de banco quase sempre termina em um pg_dump dentro de um crontab que ninguém lembra. Quando falha, você descobre no dia de restaurar.",
    solution:
      "Aplicação full-stack que cadastra bancos e destinos, agenda execuções, registra status e tamanho de cada run e envia o resultado para o Google Drive via rclone.",
    highlights: [
      "Cinco entidades modeladas em Prisma",
      "Agendamento como configuração, não script solto",
      "Histórico de execuções com status e tamanho",
    ],
  },
  {
    slug: "reservas-restaurante",
    title: "Sistema de Reservas",
    summary:
      "Reservas de mesa para restaurantes com herança, classes abstratas e interfaces. TDE de Análise e Projeto Orientado a Objetos.",
    year: "2026",
    tags: ["C#", ".NET 8", "SQLite", "POO"],
    repo: "https://github.com/sshs3rejo/sistema-reservas-restaurante",
    cover: "/projetos/reservas.png",
    status: "acadêmico",
    image:
      "https://opengraph.githubassets.com/1/sshs3rejo/sistema-reservas-restaurante",
    context:
      "O trabalho pedia modelagem orientada a objetos de verdade, não um CRUD: regras de disponibilidade, estados da reserva e persistência.",
    solution:
      "Aplicação C# .NET 8 com SQLite, hierarquia de classes, classes abstratas e interfaces. Diagramas de classe e caso de uso versionados em Mermaid.",
    highlights: [
      "Herança, classes abstratas e interfaces",
      "Persistência em SQLite",
      "Diagramas de classe e caso de uso em Mermaid",
    ],
  },
  {
    slug: "farmacia-bem-estar",
    title: "Farmácia Bem-Estar",
    summary:
      "API REST e interface web para produtos, estoque, vendas e receitas. Estoque controlado por lote e validade.",
    year: "2026",
    tags: ["Node.js", "Express 5", "MySQL", "REST"],
    repo: "https://github.com/sshs3rejo/farmacia-bem-estar",
    cover: "/projetos/farmacia.png",
    status: "acadêmico",
    image: "https://opengraph.githubassets.com/1/sshs3rejo/farmacia-bem-estar",
    context:
      "Farmácia não controla estoque por contador único: o mesmo produto tem lote e validade, e isso muda o modelo de dados inteiro.",
    solution:
      "Dez tabelas em MySQL, API REST em Node.js com Express 5 e interface web para cadastro e operação de produtos, estoque, vendas e receitas.",
    highlights: [
      "Dez tabelas com relações do domínio",
      "Estoque por lote e validade",
      "Trabalho de Programação em Banco de Dados — UniFacema",
    ],
  },
  {
    slug: "bubble-pop",
    title: "Bubble Pop!",
    summary:
      "Jogo de tiro ao alvo em JavaScript puro, canvas e zero dependências. Abre o index.html e joga — 60 segundos para bater o próprio recorde.",
    year: "2026",
    tags: ["JavaScript", "Canvas", "Game"],
    repo: "https://github.com/sshs3rejo/atividade-game-web",
    cover: "/projetos/bubble-pop.png",
    status: "protótipo",
    image: "https://opengraph.githubassets.com/1/sshs3rejo/atividade-game-web",
    context:
      "Exercício de lógica e interação: construir um jogo completo sem framework, sem build e sem biblioteca.",
    solution:
      "Canvas 2D com loop de animação, sistema de telas (start, game, gameover), partículas, projéteis e recorde salvo no navegador. Cerca de 25 funções em JavaScript puro.",
    highlights: [
      "Canvas 2D sem framework",
      "Sistema de telas e loop de jogo",
      "Recorde persistido no navegador",
    ],
  },
];
