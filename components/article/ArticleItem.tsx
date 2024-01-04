import Article from '@/types/article'
import Link from 'next/link'
import Tag from '../ui/Tag'

const ArticleItem = ({ article }: { article: Article }) => {
  return (
    <article
      key={article.slug}
      className="flex items-start justify-start gap-3"
      aria-labelledby="article-title"
    >
      <Link href="/posts/article-name" className="shrink-0">
        <div className="h-16 w-16 rounded-[14px] bg-gray-500 sm:h-[5.75rem] sm:w-[5.75rem]"></div>
      </Link>
      <div className="flex flex-col justify-center gap-2">
        <p className="text-sm uppercase text-secondary/100">{article.author}</p>
        <Link href={`/posts/${article.slug}`}>
          <h2 id="article-title" className="mb-2 line-clamp-3 font-semibold">
            {article.title}
          </h2>
          <p className="text-xs text-tertiary">
            Published: {article.createdAt}
          </p>
        </Link>
        <div className="flex items-center gap-2">
          <Tag topics={article.topics} />
        </div>
      </div>
    </article>
  )
}

export default ArticleItem
