type Props = {
  topics: string[]
}

const Tag = ({ topics }: Props) => {
  return (
    <>
      {topics.map((topic: string, index) => (
        <span
          key={index}
          className="self-start rounded-xl bg-primary/100 px-[0.4rem] py-[0.2rem] text-xs font-medium text-content-reverse"
        >
          #{topic}
        </span>
      ))}
    </>
  )
}

export default Tag
