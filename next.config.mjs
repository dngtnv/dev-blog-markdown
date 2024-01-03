import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'catppuccin-macchiato',
          onVisitLine: (node) => {
            // Prevent line from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.lenght == 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightdLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
    ],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

export default withMDX(nextConfig)
