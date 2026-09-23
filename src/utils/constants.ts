export const SITE = {
  name: 'Vida & Peso',
  title: 'Vida & Peso | Emagrecimento Saudável, Nutrição e Hábitos Sustentáveis',
  description: 'Guia definitivo e baseado em ciência para emagrecimento consciente, déficit calórico seguro, alimentação nutritiva e exercícios práticos.',
  url: 'https://blogfitness.pages.dev',
  defaultImage: '/images/og-default.jpg',
  author: 'Equipe Editorial Vida & Peso',
  locale: 'pt-BR',
  themeColor: '#1b4332',
  gaId: 'G-XXXXXXXXXX', // Substituir pela variável de ambiente ou ID real
  adsenseId: 'ca-pub-XXXXXXXXXXXXXXXX' // Substituir pelo ID real do AdSense
};

export const CATEGORIES: Record<string, { label: string; description: string; color: string }> = {
  'alimentacao': {
    label: 'Alimentação Saudável',
    description: 'Dicas práticas de nutrição, receitas equilibradas e escolhas alimentares inteligentes.',
    color: '#2d6a4f'
  },
  'exercicios': {
    label: 'Exercícios & Treinos',
    description: 'Rotinas eficientes de exercícios para fazer em casa ou na academia sem complicações.',
    color: '#1b4332'
  },
  'habitos': {
    label: 'Hábitos & Rotina',
    description: 'Construção de hábitos sustentáveis para sono reparador, manejo de estresse e disciplina.',
    color: '#40916c'
  },
  'emagrecimento-saudavel': {
    label: 'Emagrecimento Consciente',
    description: 'Fisiologia do déficit calórico, quebra de mitos e estratégias para emagrecer sem efeito sanfona.',
    color: '#081c15'
  },
  'motivacao': {
    label: 'Mentalidade & Motivação',
    description: 'Foco, consistência mental e superação de obstáculos emocionais durante o processo.',
    color: '#52b788'
  }
};
