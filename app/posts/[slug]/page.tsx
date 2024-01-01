import { getArticleBySlug } from '../../../lib/mdx-api'
import Tag from '@/components/ui/Tag'
import dynamic from 'next/dynamic'

const Page = ({ params }: { params: { slug: string } }) => {
  const article: any = getArticleBySlug(params.slug, [
    'title',
    'createdAt',
    'slug',
    'author',
    'content',
    'tags',
  ])

  const DynamicMdx = dynamic(() => import(`../../blog/${article.slug}.mdx`))

  return (
    <article aria-labelledby="article-title">
      <header className="py-12 text-center">
        <div className="flex justify-center gap-2">
          <Tag tags={article.tags} />
        </div>
        <div className="px-6 sm:px-16 lg:px-0">
          <h1
            id="article-title"
            className="mx-auto mt-6 max-w-3xl text-left text-xl font-semibold leading-[1.5] lg:text-3xl"
          >
            {article.title}
          </h1>
        </div>
      </header>
      <div className="flex justify-between gap-7">
        <section className="basis-full px-6 sm:px-16 lg:px-0">
          <div className="flex items-center">
            <div className="h-[3rem] w-[3rem] shrink-0 rounded-[50%] bg-gray-500"></div>
            <div className="ml-3 flex flex-col">
              <p className="text-sm font-semibold uppercase text-secondary/100">
                {article.author}
              </p>
              <p className="text-sm text-tertiary">
                {article.createdAt} - 2 min read
              </p>
            </div>
          </div>
          <div className="my-5 text-base leading-[1.9] sm:text-lg">
            <div className="prose prose-zinc md:prose-lg dark:prose-invert">
              <DynamicMdx />
            </div>
          </div>
        </section>
        <aside className="hidden w-[300px] lg:block">Table of Contents</aside>
      </div>
    </article>
  )
}

export default Page
