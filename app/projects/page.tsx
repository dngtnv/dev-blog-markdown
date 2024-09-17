export default function Projects() {
  return (
    <>
      <section className="mx-auto mt-11 flex max-w-2xl flex-col gap-2 px-3 sm:px-6 lg:px-0">
        <h1 className="text-xl font-bold">Projects</h1>
        <p className="text-lg leading-7 dark:text-[#bdbdbd]">
          Here are some of my latest projects
        </p>
      </section>
      <section className="mx-auto mt-11 flex max-w-2xl flex-row justify-between px-3 pb-12 sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-6 md:grid-rows-3 md:gap-4">
          <div className="col-span-2 rounded-lg bg-[#DDEEF8] p-3 md:col-span-4 md:row-span-2 dark:bg-[#1B2532]">
            <h2 className="text-lg font-bold">Project 1</h2>
            <p className="text-base dark:text-[#bdbdbd]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
          <div className="rounded-lg bg-[#DDEEF8] p-3 md:col-span-2 md:row-span-1 dark:bg-[#1B2532]">
            <h2 className="text-lg font-bold">Project 2</h2>
            <p className="text-base dark:text-[#bdbdbd]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
          <div className="rounded-lg bg-[#DDEEF8] p-3 md:col-span-2 md:row-span-1 dark:bg-[#1B2532]">
            <h2 className="text-lg font-bold">Project 3</h2>
            <p className="text-base dark:text-[#bdbdbd]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
          <div className="col-span-2 rounded-lg bg-[#DDEEF8] p-3 md:col-span-3 md:row-span-1 dark:bg-[#1B2532]">
            <h2 className="text-lg font-bold">Project 4</h2>
            <p className="text-base dark:text-[#bdbdbd]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
          <div className="col-span-2 rounded-lg bg-[#DDEEF8] p-3 md:col-span-3 md:row-span-1 dark:bg-[#1B2532]">
            <h2 className="text-lg font-bold">Project 5</h2>
            <p className="text-base dark:text-[#bdbdbd]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
