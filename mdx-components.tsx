import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

const Myp = ({ children }: { children?: React.ReactNode }) => (
  <p className="md:my-5">{children}</p>
)

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
  <li className="not-prose my-2 pl-0">{children}</li>
)

const MyCode = ({ children }: { children?: React.ReactNode }) => (
  <code className="font-normal before:content-none after:content-none standalone-code:rounded standalone-code:bg-codeblock-bg standalone-code:px-[0.4rem] standalone-code:py-[0.2rem] standalone-code:text-[0.85em] standalone-code:text-code-fg">
    {children}
  </code>
)

const Mya = ({ children }: { children?: React.ReactNode }) => (
  <a
    className="cursor-pointer font-normal text-accent2 decoration-current underline-offset-2 hover:text-accent2/70"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

const MyBlockquote = ({ children }: { children?: React.ReactNode }) => (
  <blockquote className="border-l-[3px] border-l-accent2 text-[0.97em] font-normal not-italic dark:border-l-accent2 [&>p]:before:content-none [&>p]:after:content-none">
    {children}
  </blockquote>
)

const MyTable = ({ children }: { children?: React.ReactNode }) => (
  <div className="rounded-lg prose-thead:bg-accent1/25 prose-tr:border-b prose-tr:border-b-slate-400 prose-th:p-2 prose-th:font-bold prose-th:text-black/85 prose-td:p-2 dark:prose-tr:border-zinc-700 dark:prose-th:text-white">
    <table>{children}</table>
  </div>
)

const MyImg = (props: any) => (
  <Image
    width={720}
    height={360}
    placeholder="blur"
    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAAkCAYAAACgyw26AAAAtUlEQVR42u3WQREAAAQAMJKroikVvN2WYhk9FQAAwEkKNAAACDQAAAg0AAAINAAACDQAAAg0AAAItEADAIBAAwCAQAMAgEADAIBAAwCAQAMAgEALNAAACDQAAAg0AAAINAAACDQAAAg0AAAItEADAIBAAwCAQAMAgEADAIBAAwCAQAMAgEALNAAACDQAAAg0AAAINAAACDQAAAg0AAAItEADAIBAAwCAQAMAgEADAIBAAwDATwspCExdccHXxQAAAABJRU5ErkJggg=="
    loading="lazy"
    alt=""
    sizes="100vw"
    {...(props as ImageProps)}
  />
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: Myp,
    h1: Myh1,
    h2: Myh2,
    h3: Myh3,
    h4: Myh4,
    li: Myli,
    a: Mya,
    img: MyImg,
    blockquote: MyBlockquote,
    code: MyCode,
    table: MyTable,
    ...components,
  }
}
