import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import getReadTime from './mdx-read-time'

const postsDirectory = join(process.cwd(), 'app', 'blog')

export function getArticleSlugs() {
  return fs.readdirSync(postsDirectory).filter((path) => /\.md?$/.test(path))
}

export function getArticleBySlug(slug: string, fields: string[] = []): Article {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const readTime = getReadTime(content)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (field === 'readTime') {
      items[field] = readTime
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllArticles(fields: string[] = []): Article[] {
  const slugs = getArticleSlugs()
  const posts = slugs
    .map((slug) => getArticleBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1))
  return posts
}
