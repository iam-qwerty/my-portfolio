// Revalidates blog-related pages after Sanity publishes content.

import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

type WebhookPayload = {
  path?: string
  paths?: string[]
  slug?: string | { current?: string }
}

function getSlugPath(slug: WebhookPayload['slug']) {
  if (typeof slug === 'string' && slug.trim()) {
    return `/blog/${slug.trim()}`
  }

  if (slug && typeof slug === 'object' && typeof slug.current === 'string' && slug.current.trim()) {
    return `/blog/${slug.current.trim()}`
  }

  return null
}

export async function POST(req: NextRequest) {
  try {
    // Ensure the SANITY_REVALIDATE_SECRET is available
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response('Missing environment variable SANITY_REVALIDATE_SECRET', { status: 500 })
    }

    // Parse the request body to validate the signature and extract the paths
    // The parseBody function checks the signature and returns the body if valid
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true,
    )

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 })
    }

    if (!body?.path && !body?.paths?.length && !body?.slug) {
      return new Response('Bad Request', { status: 400 })
    }

    const pathsToRevalidate = new Set<string>(['/', '/blog', '/sitemap.xml'])

    if (body.path) {
      pathsToRevalidate.add(body.path)
    }

    for (const path of body.paths ?? []) {
      pathsToRevalidate.add(path)
    }

    const slugPath = getSlugPath(body.slug)
    if (slugPath) {
      pathsToRevalidate.add(slugPath)
    }

    for (const path of pathsToRevalidate) {
      revalidatePath(path)
    }

    return NextResponse.json({ revalidated: [...pathsToRevalidate] })
  } catch (err) {
    console.error(err)
    return new Response((err as Error).message, { status: 500 })

  }
}
