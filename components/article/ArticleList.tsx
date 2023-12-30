import ArticleItem from './ArticleItem'
import { getAllArticles } from '../../lib/mdx-api'
import Article from '@/types/article'

const ArticleList = () => {
  const allArticles = getAllArticles([
    'author',
    'title',
    'createdAt',
    'slug',
    'tags',
  ])
  console.log(allArticles)

  return (
    <section
      className="mt-[5.625rem] px-3 sm:px-6 lg:px-0"
      aria-label="Articles"
    >
      <div className="h-[calc(60vh_+_3rem)] rounded-2xl rounded-b-none border-4 border-b-0 border-bd px-3 py-8 sm:px-8">
        <p className="font-medium uppercase tracking-wide" aria-label="Latest">
          Latest
        </p>
        <hr className="mt-[14px] border border-bd" />
        <div className="grid-col-1 my-9 grid gap-7 lg:grid-cols-2">
          {allArticles.map((article: Article) => (
            <ArticleItem key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticleList
