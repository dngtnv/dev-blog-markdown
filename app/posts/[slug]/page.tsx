import MdxLayout from '@/app/blog/layout'
import Tag from '@/components/ui/Tag'
import { getArticleBySlug } from '../../../lib/mdx-api'
import TOC from '@/components/article/TOC'
import getFormattedDate from '@/lib/mdx-formatted-date'
import Image from 'next/image'
import { ResolvingMetadata } from 'next'

export async function generateMetadata(
  {
    params,
  }: {
    params: { slug: string }
  },
  parent: ResolvingMetadata,
) {
  const { meta } = await getArticleBySlug(params.slug)

  // optionally access and extend (rather than replace) parent matedata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      images: [`${meta.image.url}`, ...previousImages],
    },
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { meta, content } = await getArticleBySlug(params.slug)
  const pubDate = getFormattedDate(meta.createdAt)

  return (
    <article className="pb-24" aria-labelledby="article-title">
      <header className="py-12 text-center">
        <div className="flex justify-center gap-2">
          <Tag topics={meta.topics} />
        </div>
        <div className="px-6 text-center sm:px-16 lg:px-0">
          <h1
            id="article-title"
            className="mx-auto mt-6 inline-block max-w-3xl text-left text-xl font-semibold leading-[1.5] lg:text-4xl"
          >
            <span className="text-left">{meta.title}</span>
          </h1>
        </div>
      </header>
      <div className="md:flex md:justify-between md:gap-[30px]">
        <section className="w-full px-6 sm:px-12 md:px-14 lg:w-[calc(100%_-_330px)] lg:px-6 xl:px-0">
          <div className="flex items-center">
            <div className="h-[3rem] w-[3rem] shrink-0 rounded-[50%] bg-gray-500"></div>
            <div className="ml-3 flex flex-col">
              <p className="text-sm font-semibold uppercase text-accent2">
                {meta.author}
              </p>
              <p className="text-sm text-accent1">
                {pubDate} · {meta.readTime} min read
              </p>
            </div>
          </div>
          <figure className="relative my-6 aspect-video w-full">
            <Image
              className="absolute rounded-lg object-cover"
              src={meta.image.url}
              alt={meta.image.alt}
              priority
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAAkCAYAAACgyw26AAAAtUlEQVR42u3WQREAAAQAMJKroikVvN2WYhk9FQAAwEkKNAAACDQAAAg0AAAINAAACDQAAAg0AAAItEADAIBAAwCAQAMAgEADAIBAAwCAQAMAgEALNAAACDQAAAg0AAAINAAACDQAAAg0AAAItEADAIBAAwCAQAMAgEADAIBAAwCAQAMAgEALNAAACDQAAAg0AAAINAAACDQAAAg0AAAItEADAIBAAwCAQAMAgEADAIBAAwDATwspCExdccHXxQAAAABJRU5ErkJggg=="
              sizes="(min-width: 1280px) 674px, (min-width: 1000px) calc(9.23vw + 510px), (min-width: 580px) calc(96vw - 73px), calc(100vw - 48px)"
            />
          </figure>
          <div className="my-5 text-base leading-[1.9] sm:text-lg">
            <MdxLayout>{content}</MdxLayout>
          </div>
        </section>
        <aside className="hidden lg:block lg:w-[330px]">
          <TOC nodes={meta.headings} />
        </aside>
      </div>
    </article>
  )
}

export default Page
