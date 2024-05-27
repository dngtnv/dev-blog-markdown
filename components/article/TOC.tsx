'use client'

import { Node } from '../../types/article'
import TOCLink from './TOCLink'

const TableOfContents = ({ nodes }: { nodes: Node[] }) => {
  if (!nodes?.length) return null

  function renderNodes(nodes: Node[], depth: number = 1) {
    const isOutermost = depth === 1
    return (
      <ol
        className={`text-[15px] ${isOutermost ? 'font-bold' : 'font-normal'}`}
      >
        {nodes.map((node) => {
          return (
            <li
              key={node.data.hProperties.id}
              className={`my-2 ${!isOutermost && 'pl-5'}`}
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
    <div className="scrollbar-webkit sticky top-28 max-h-[calc(100vh_-_160px)] overflow-auto rounded-xl bg-bkg">
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
