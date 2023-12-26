import ArticleItem from './ArticleItem'

const articleList = [
  {
    id: 1,
    author: 'dngtnv',
    title: 'How to config Neovim in Lua Language',
    publishedAt: '2023-10-10',
    tags: 'neovim',
  },
  {
    id: 2,
    author: 'dngtnv',
    title: 'How to config Neovim in Lua Language',
    publishedAt: '2023-10-10',
    tags: 'neovim',
  },
  {
    id: 3,
    author: 'dngtnv',
    title: 'How to config Neovim in Lua Language',
    publishedAt: '2023-10-10',
    tags: 'neovim',
  },
  {
    id: 4,
    author: 'dngtnv',
    title: 'How to config Neovim in Lua Language',
    publishedAt: '2023-10-10',
    tags: 'neovim',
  },
  {
    id: 5,
    author: 'dngtnv',
    title: 'How to config Neovim in Lua Language',
    publishedAt: '2023-10-10',
    tags: 'neovim',
  },
  {
    id: 6,
    author: 'dngtnv',
    title: 'How to config Neovim in Lua Language',
    publishedAt: '2023-10-10',
    tags: 'neovim',
  },
  {
    id: 7,
    author: 'dngtnv',
    title: 'How to config Neovim in Lua Language',
    publishedAt: '2023-10-10',
    tags: 'neovim',
  },
  {
    id: 8,
    author: 'dngtnv',
    title: 'How to config Neovim in Lua Language',
    publishedAt: '2023-10-10',
    tags: 'neovim',
  },
]

const ArticleList = () => {
  return (
    <section className="mt-[5.625rem]">
      <div className="rounded-2xl rounded-b-none border-4 border-b-0 border-bd p-8">
        <p className="font-medium uppercase tracking-wide">Latest</p>
        <hr className="mt-[14px] border-[1px] border-bd" />
        <div className="my-9 grid grid-cols-2 gap-7">
          {articleList.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticleList
