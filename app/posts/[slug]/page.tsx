import MdxLayout from '@/app/blog/layout'
import { getArticleBySlug } from '../../../lib/mdx-api'
import Tag from '@/components/ui/Tag'
import dynamic from 'next/dynamic'

const Page = ({ params }: { params: { slug: string } }) => {
  const article: any = getArticleBySlug(params.slug, [
    'title',
    'createdAt',
    'readTime',
    'slug',
    'author',
    'content',
    'topics',
  ])

  const DynamicMdx = dynamic(() => import(`../../blog/${article.slug}.md`))

  return (
    <article aria-labelledby="article-title">
      <header className="py-12 text-center">
        <div className="flex justify-center gap-2">
          <Tag topics={article.topics} />
        </div>
        <div className="px-6 text-center sm:px-16 lg:px-0">
          <h1
            id="article-title"
            className="mx-auto mt-6 inline-block max-w-3xl text-left text-xl font-semibold leading-[1.5] lg:text-4xl"
          >
            <span className="text-left">{article.title}</span>
          </h1>
        </div>
      </header>
      <div className="md:flex md:justify-between md:gap-[30px]">
        <section className="w-full px-6 sm:px-12 md:px-14 lg:w-[calc(100%_-_330px)] lg:px-6 xl:px-0">
          <div className="flex items-center">
            <div className="h-[3rem] w-[3rem] shrink-0 rounded-[50%] bg-gray-500"></div>
            <div className="ml-3 flex flex-col">
              <p className="text-sm font-semibold uppercase text-primary">
                {article.author}
              </p>
              <p className="text-sm text-tertiary">
                {article.createdAt} - {article.readTime} min read
              </p>
            </div>
          </div>
          <div className="my-5 text-base leading-[1.9] sm:text-lg">
            <MdxLayout>
              <DynamicMdx />
            </MdxLayout>
          </div>
        </section>
        <aside className="hidden lg:block lg:w-[330px]">
          Table of Contents
        </aside>
      </div>
    </article>
  )
}

export default Page
