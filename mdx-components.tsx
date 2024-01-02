import type { MDXComponents } from 'mdx/types'

const Myh1 = ({ children }: { children?: React.ReactNode }) => (
  <h1 className="text-2xl md:text-3xl">{children}</h1>
)

const Myh2 = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="text-xl md:mt-14 md:text-2xl">{children}</h2>
)

const Myh3 = ({ children }: { children?: React.ReactNode }) => (
  <h3 className="text-xl md:mt-10 md:text-xl">{children}</h3>
)

const Myh4 = ({ children }: { children?: React.ReactNode }) => (
  <h4 className="text-lg md:mt-7">{children}</h4>
)

const Myli = ({ children }: { children?: React.ReactNode }) => (
  <li className="my-2 pl-0">{children}</li>
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Myh1,
    h2: Myh2,
    h3: Myh3,
    h4: Myh4,
    li: Myli,
    ...components,
  }
}
