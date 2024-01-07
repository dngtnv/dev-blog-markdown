import fs from 'fs'
import { join } from 'path'
import getReadTime from './mdx-read-time'
import { BlogPost, Meta } from '../types/article'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { remark } from 'remark'
import { headingTree } from './mdx-heading'
import rehypeSlug from 'rehype-slug'
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

export async function getHeadings(content: string) {
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(headingTree).process(content)
  return processedContent.data.headings
}

export function getArticleSlugs() {
  return fs.readdirSync(postsDirectory).filter((path) => /\.md?$/.test(path))
}

export async function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const readTime = getReadTime(fileContents)
  const headings = await getHeadings(fileContents)

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
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, options]],
      },
    },
  })

  const blogPostObj: BlogPost = {
    meta: {
      ...frontmatter,
      slug: realSlug,
      readTime: readTime,
      headings: headings,
    },
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
