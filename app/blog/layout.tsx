export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose prose-zinc max-w-none md:prose-lg dark:prose-invert prose-headings:mb-4 prose-headings:border-b prose-headings:border-b-bd/10 prose-headings:pb-2 prose-headings:leading-[1.5] prose-img:max-w-full prose-img:rounded-lg prose-img:border prose-img:border-slate-300 dark:prose-headings:border-b-bd dark:prose-img:border-zinc-700">
      {children}
    </div>
  )
}
