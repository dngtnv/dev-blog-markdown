import { Meta } from '@/types/article'
import Link from 'next/link'
import Tag from '../ui/Tag'
import Image from 'next/image'
import getFormattedDate from '@/lib/mdx-formatted-date'

const ArticleItem = ({ article }: { article: Meta }) => {
  const pubDate = getFormattedDate(article.createdAt)

  // return (
  //   <article
  //     key={article.slug}
  //     className="flex items-start justify-start gap-3"
  //     aria-labelledby="article-title"
  //   >
  //     <Link href={`/posts/${article.slug}`} className="shrink-0">
  //       <figure className="relative aspect-square w-16 rounded-[14px] bg-gray-500 sm:w-[5.75rem]">
  //         <Image
  //           className="absolute h-full rounded-[14px] object-cover"
  //           src={article.image.url}
  //           alt={article.image.alt}
  //           fill={true}
  //           sizes="(min-width: 640px) 200px, 100px"
  //         />
  //       </figure>
  //     </Link>
  //     <div className="flex flex-col justify-center gap-2">
  //       <p className="text-xs uppercase text-accent2">{article.author}</p>
  //       <Link href={`/posts/${article.slug}`}>
  //         <h2
  //           id="article-title"
  //           className="mb-2 line-clamp-3 font-semibold leading-[1.2]"
  //         >
  //           {article.title}
  //         </h2>
  //         <p className="text-xs text-accent1">Published: {pubDate}</p>
  //       </Link>
  //       <div className="flex items-center gap-2">
  //         <Tag topics={article.topics} />
  //       </div>
  //     </div>
  //   </article>
  // )
  return (
    <article className="group relative rounded-2xl bg-[#eeeeee] shadow-lg dark:bg-[#282E44]">
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
