import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().min(10).max(100),
    description: z.string().min(30).max(250),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'alimentacao',
      'exercicios',
      'habitos',
      'emagrecimento-saudavel',
      'motivacao'
    ]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string(),
    heroImageAlt: z.string().optional().default(''),
    author: z.string(),
    readingTime: z.number().optional().default(5),
    featured: z.boolean().default(false),
    focusKeyword: z.string().optional(),
    affiliateProducts: z.array(
      z.object({
        nome: z.string(),
        url: z.string().url(),
        imagem: z.string().optional(),
        descricaoCurta: z.string(),
        botaoTexto: z.string().optional().default('Ver Oferta Oficial')
      })
    ).optional(),
    draft: z.boolean().default(false),
    seo: z.object({
      canonicalUrl: z.string().url().optional(),
      noindex: z.boolean().optional().default(false)
    }).optional()
  })
});

const toolsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number().default(1),
    calculatorType: z.enum(['imc', 'calorias', 'proteina'])
  })
});

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string(),
    credentials: z.string(),
    social: z.object({
      instagram: z.string().optional(),
      linkedin: z.string().optional(),
      website: z.string().optional()
    }).optional()
  })
});

export const collections = {
  posts: postsCollection,
  tools: toolsCollection,
  authors: authorsCollection
};
