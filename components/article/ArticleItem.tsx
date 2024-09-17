import getFormattedDate from '@/lib/mdx-formatted-date'
import { Meta } from '@/types/article'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../ui/Tag'

const ArticleItem = ({ article }: { article: Meta }) => {
  const pubDate = getFormattedDate(article.createdAt)

  return (
    <article className="group relative rounded-2xl bg-[#DDEEF8] shadow-lg dark:bg-[#1B2532]">
      <div className="absolute right-3 top-3 z-50 flex gap-2">
        <Tag topics={article.topics} />
      </div>
      <Link
        href={`/posts/${article.slug}`}
        className="flex h-full flex-col gap-3"
      >
        <figure className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-tl-lg rounded-tr-lg">
          <Image
            className="absolute h-full object-cover"
            src={article.image.url}
            alt={article.image.alt}
            fill={true}
            sizes="(min-width: 1000px) 271px, (min-width: 580px) calc(50vw - 90px), calc(100vw - 72px)"
          />
        </figure>
        <div className="flex flex-grow flex-col justify-between gap-8 px-3 pb-4">
          <h2
            id="article-title"
            className="line-clamp-3 font-semibold leading-[1.5] group-hover:underline group-hover:decoration-2"
          >
            {article.title}
          </h2>
          <p className="text-xs text-accent1">
            By {article.author} · {pubDate}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default ArticleItem
