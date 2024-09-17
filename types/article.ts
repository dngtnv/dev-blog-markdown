import { JSXElementConstructor, ReactElement } from 'react'

export type Meta = {
  slug: string
  title: string
  author: string
  createdAt: string
  updatedAt: string
  description: string
  // readTime: number
  image: {
    url: string
    alt: string
  }
  topics: string[]
}

export type BlogPost = {
  meta: Meta & {
    readTime: number
    headings: Node[]
  }
  content: ReactElement<any, string | JSXElementConstructor<any>>
}

export type Node = {
  data: {
    hProperties: {
      id: string
    }
  }
  value: string
  children: Node[]
  depth: number
}
