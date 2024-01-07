import fs from 'fs'
import { join } from 'path'
import getReadTime from './mdx-read-time'
import { BlogPost, Meta } from '../types/article'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkFrontmatter from 'remark-frontmatter'
import rehypePrettyCode from 'rehype-pretty-code'
import {
  MdxBlockquote,
  MdxCode,
  MdxImg,
  MdxTable,
  MdxLink,
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxLi,
  MdxP,
  MdxVideo,
} from '@/components/ui/mdx-components'
import remarkGfm from 'remark-gfm'

const options = {
  theme: 'material-theme-palenight',
  keepBackground: true,
  defaultLang: 'plaintext',
  onVisitLine: (node: any) => {
    // Prevent line from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.lenght == 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightdLine(node: any) {
    node.properties.className.push('line--highlighted')
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ['word--highlighted']
  },
}

const postsDirectory = join(process.cwd(), 'app', 'blog')

export function getArticleSlugs() {
  return fs.readdirSync(postsDirectory).filter((path) => /\.md?$/.test(path))
}

export async function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const readTime = getReadTime(fileContents)

  const { frontmatter, content } = await compileMDX<Meta>({
    source: fileContents,
    components: {
      p: MdxP,
      h1: MdxH1,
      h2: MdxH2,
      h3: MdxH3,
      h4: MdxH4,
      li: MdxLi,
      code: MdxCode,
      a: MdxLink,
      blockquote: MdxBlockquote,
      table: MdxTable,
      img: MdxImg,
      MdxVideo,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkFrontmatter, remarkGfm],
        rehypePlugins: [[rehypePrettyCode, options]],
      },
    },
  })

  const blogPostObj: BlogPost = {
    meta: { ...frontmatter, slug: realSlug, readTime: readTime },
    content,
  }

  return blogPostObj
}

export async function getAllArticlesMeta() {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((path) => /\.md?$/.test(path))

  let articles: Meta[] = []

  for (const file of files) {
    const { meta } = await getArticleBySlug(file)
    articles.push(meta)
  }
  return articles.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
}
