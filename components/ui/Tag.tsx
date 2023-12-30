type Props = {
  tags: string[]
}

const Tag = ({ tags }: Props) => {
  return (
    <>
      {tags.map((tag: string, index) => (
        <span
          key={index}
          className="self-start rounded-xl bg-primary/100 px-[0.4rem] py-[0.2rem] text-xs text-white"
        >
          #{tag}
        </span>
      ))}
    </>
  )
}

export default Tag
