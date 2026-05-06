// lib/sanity.config.ts
export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // from sanity.json or sanity manage
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2025-03-18',
    useCdn: true,
  }
  