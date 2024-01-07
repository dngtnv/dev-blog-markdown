'use client'
import { Node } from '../../types/article'

const TableOfContents = ({ nodes }: { nodes: Node[] }) => {
  if (!nodes?.length) return null

  function renderNodes(nodes: Node[]) {
    return (
      <ul>
        {nodes.map((node) => {
          const id = node.data.hProperties.id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById(id)
                    .scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                {node.value}
              </a>
              {node.children?.length > 0 && renderNodes(node.children)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div>
      <p>Table of contents</p>
      {renderNodes(nodes)}
    </div>
  )
}

export default TableOfContents
