type ArticleType = {
  slug: string
  title: string
  author: string
  createdAt: string
  updatedAt: string
  description: string
  image: {
    url: string
    alt: string
  }
  content: string
  topics: string[]
}

export default ArticleType
