import { SITE } from './constants';
import { formatISODate } from './formatDate';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/blog?busca={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    description: SITE.description,
    sameAs: []
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE.url}${item.url}`
    }))
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  image,
  pubDate,
  updatedDate,
  authorName,
  authorCredentials
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  pubDate: Date | string;
  updatedDate?: Date | string;
  authorName: string;
  authorCredentials?: string;
}) {
  const fullImageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`;
  const fullArticleUrl = url.startsWith('http') ? url : `${SITE.url}${url}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullArticleUrl
    },
    url: fullArticleUrl,
    image: [fullImageUrl],
    datePublished: formatISODate(pubDate),
    dateModified: formatISODate(updatedDate || pubDate),
    author: {
      '@type': 'Person',
      name: authorName,
      jobTitle: authorCredentials || 'Especialista Editorial'
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/images/logo.png`
      }
    },
    inLanguage: SITE.locale
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
