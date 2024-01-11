'use client'

import { Node } from '../../types/article'
import TOCLink from './TOCLink'

const TableOfContents = ({ nodes }: { nodes: Node[] }) => {
  if (!nodes?.length) return null

  function renderNodes(nodes: Node[], depth: number = 1) {
    const isOutermost = depth === 1
    return (
      <ol
        className={`font-bold ${isOutermost
            ? 'relative before:absolute before:bottom-3 before:left-[0.3rem] before:top-3 before:w-[2px] before:bg-primary/25 before:content-[""]'
            : 'font-normal'
          }`}
      >
        {nodes.map((node) => {
          return (
            <li
              key={node.data.hProperties.id}
              className={`relative my-2 before:absolute before:top-[6px] before:rounded-full before:border-2 before:border-white before:bg-[#afc9ff] before:content-[""]  dark:before:border-[#23273A] dark:before:bg-[#34548a] ${isOutermost
                  ? 'pl-5 before:left-0 before:h-3 before:w-3'
                  : 'before:left-[-18.3px] before:h-2 before:w-2'
                }`}
            >
              <TOCLink node={node} />
              {node.children?.length > 0 &&
                renderNodes(node.children, depth + 1)}
            </li>
          )
        })}
      </ol>
    )
  }

  return (
    <div className="sticky top-28 max-h-[calc(100vh_-_160px)] overflow-auto rounded-xl bg-white p-5 dark:bg-[#23273A]">
      <span className="text-xl font-semibold text-content">
        In this article
      </span>
      <div className="text-sm text-[#d4d4d8] md:text-base">
        {renderNodes(nodes)}
      </div>
    </div>
  )
}

export default TableOfContents
