import Link from 'next/link'

type Article = {
  id: number
  title: string
  author: string
  publishedAt: string
  tags: string
}

const ArticleItem = ({ article }: { article: Article }) => {
  return (
    <article
      key={article.id}
      className="flex items-start justify-start gap-3"
      aria-labelledby="article-title"
    >
      <Link href="/posts/article-name" className="shrink-0">
        <div className="h-16 w-16 rounded-[14px] bg-gray-500 sm:h-[5.75rem] sm:w-[5.75rem]"></div>
      </Link>
      <div className="flex flex-col justify-center gap-2">
        <p className="text-sm uppercase text-secondary/100">{article.author}</p>
        <Link href="/posts/article-name">
          <h2 id="article-title" className="mb-2 line-clamp-3 font-semibold">
            {article.title}
          </h2>
          <p className="text-xs text-tertiary">
            Published: {article.publishedAt}
          </p>
        </Link>
        <span className="self-start rounded-xl bg-primary/100 px-[0.4rem] py-[0.2rem] text-xs text-white">
          #{article.tags}
        </span>
      </div>
    </article>
  )
}

export default ArticleItem
