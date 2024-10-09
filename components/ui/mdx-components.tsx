import Image, { ImageProps } from 'next/image'
import { HTMLAttributes, ReactNode } from 'react'

interface MdxHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  id?: string
}

export const MdxP = ({ children }: { children?: React.ReactNode }) => (
  <p className="md:my-5">{children}</p>
)

export const MdxH1: React.FC<MdxHeadingProps> = ({ id, children }) => (
  <h1 id={id} className="text-2xl md:text-3xl">
    {children}
  </h1>
)

export const MdxH2: React.FC<MdxHeadingProps> = ({ id, children }) => (
  <h2 id={id} className="text-xl md:mt-14 md:text-2xl">
    {children}
  </h2>
)

export const MdxH3: React.FC<MdxHeadingProps> = ({ id, children }) => (
  <h3 id={id} className="text-xl md:mt-10 md:text-xl">
    {children}
  </h3>
)

export const MdxH4: React.FC<MdxHeadingProps> = ({ id, children }) => (
  <h4 id={id} className="text-lg md:mt-7">
    {children}
  </h4>
)

export const MdxLi = ({ children }: { children?: React.ReactNode }) => (
  <li className="not-prose my-2 pl-0">{children}</li>
)

export const MdxCode = ({ children }: { children?: React.ReactNode }) => (
  <code className="font-normal before:content-none after:content-none standalone-code:rounded standalone-code:bg-codeblock-bg standalone-code:px-[0.4rem] standalone-code:py-[0.2rem] standalone-code:text-[0.85em] standalone-code:text-code-fg">
    {children}
  </code>
)

export const MdxLink = ({ children }: { children?: React.ReactNode }) => (
  <a
    className="cursor-pointer font-normal text-accent2 decoration-current underline-offset-2 hover:text-accent2/70"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export const MdxBlockquote = ({ children }: { children?: React.ReactNode }) => (
  <blockquote className="border-l-[3px] border-l-accent2 text-[0.97em] font-normal not-italic dark:border-l-accent2 [&>p]:before:content-none [&>p]:after:content-none">
    {children}
  </blockquote>
)

export const MdxTable = ({ children }: { children?: React.ReactNode }) => (
  <div className="rounded-lg prose-thead:bg-accent1/25 prose-tr:border-b prose-tr:border-b-slate-400 prose-th:p-2 prose-th:font-bold prose-th:text-black/85 prose-td:p-2 dark:prose-tr:border-zinc-700 dark:prose-th:text-white">
    <table>{children}</table>
  </div>
)

export const MdxImg = (props: any) => (
  <Image
    width={720}
    height={360}
    placeholder="blur"
    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAAAkCAYAAACgyw26AAAAtUlEQVR42u3WQREAAAQAMJKroikVvN2WYhk9FQAAwEkKNAAACDQAAAg0AAAINAAACDQAAAg0AAAItEADAIBAAwCAQAMAgEADAIBAAwCAQAMAgEALNAAACDQAAAg0AAAINAAACDQAAAg0AAAItEADAIBAAwCAQAMAgEADAIBAAwCAQAMAgEALNAAACDQAAAg0AAAINAAACDQAAAg0AAAItEADAIBAAwCAQAMAgEADAIBAAwDATwspCExdccHXxQAAAABJRU5ErkJggg=="
    loading="lazy"
    sizes="(min-width: 1280px) 672px, (min-width: 1000px) calc(9.23vw + 509px), (min-width: 880px) 718px, (min-width: 580px) 84.29vw, calc(100vw - 50px)"
    {...(props as ImageProps)}
  />
)

export const MdxVideo = ({ id }: { id: string }) => {
  return (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        className="h-full w-full rounded-lg border border-slate-300 dark:border-zinc-700"
      ></iframe>
    </div>
  )
}
