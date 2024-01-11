type Props = {
  topics: string[]
}

const Tag = ({ topics }: Props) => {
  return (
    <>
      {topics.map((topic: string, index) => (
        <span
          key={index}
          className="max-w-fit self-start rounded-lg bg-primary/100 px-[0.3rem] py-[0.125rem] text-xs font-medium text-white dark:text-bkg"
        >
          #{topic}
        </span>
      ))}
    </>
  )
}

export default Tag
