import { useEffect, useRef, useState } from 'react'
import { Node } from '../../types/article'

function useHighlighted(
  id: string,
): [boolean, React.Dispatch<React.SetStateAction<string>>] {
  const observer = useRef<IntersectionObserver | undefined>()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }
    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '0% 0% -35% 0px',
    })

    const elements = document.querySelectorAll('h1, h2, h3, h4')
    elements.forEach((el) => observer.current?.observe(el))
    return () => observer.current?.disconnect()
  }, [])

  return [activeId === id, setActiveId]
}

const TOCLink = ({ node }: { node: Node }) => {
  const id = node.data.hProperties.id
  const [highlighted, setHighlighted] = useHighlighted(id)
  return (
    <a
      href={`#${id}`}
      className={`${highlighted ? 'text-primary' : 'text-[#3f3f46] dark:text-[#d4d4d8]'
        }`}
      onClick={(e) => {
        e.preventDefault()
        setHighlighted(id)
        document
          .getElementById(id)!
          .scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
    >
      {node.value}
    </a>
  )
}

export default TOCLink
