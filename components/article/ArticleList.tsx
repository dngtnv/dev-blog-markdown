import ArticleItem from './ArticleItem'
import { getAllArticlesMeta } from '../../lib/mdx-api'

const ArticleList = async () => {
  const allArticles = await getAllArticlesMeta()

  return (
    <section
      className="mt-[5.625rem] px-3 sm:px-6 lg:px-0"
      aria-label="Articles"
    >
      <div className="h-auto min-h-[calc(60vh_+_3rem)] rounded-2xl rounded-b-none border-4 border-b-0 border-bd px-3 py-8 sm:px-8">
        <p className="font-medium uppercase tracking-wide" aria-label="Latest">
          Latest
        </p>
        <hr className="mt-[14px] border border-bd" />
        <div className="my-9 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {allArticles.map((article: any) => (
            <ArticleItem key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticleList
