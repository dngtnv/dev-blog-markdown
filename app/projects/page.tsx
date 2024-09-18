import Image from 'next/image'

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
          <a
            href="https://github.com/dngtnv/zenn-clone"
            className="group col-span-2 rounded-lg bg-[#DDEEF8] p-3 md:col-span-4 md:row-span-2 dark:bg-[#1B2532]"
          >
            <div className="flex flex-col gap-2">
              <Image
                src="https://source.unsplash.com/random/720x360"
                width={720}
                height={360}
                className="rounded-lg"
                alt="project 1"
                priority
              />
              <h2 className="text-lg font-bold group-hover:underline">
                Zenn Dev clone
              </h2>
              <p className="text-base dark:text-[#bdbdbd]">
                A humble clone of zenn.dev - still working on
              </p>
            </div>
          </a>
          <a
            href="https://wordev.netlify.app/"
            className="group relative overflow-hidden rounded-lg p-3 before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-lg before:bg-[#DDEEF8] before:bg-[url('/wordev.netlify.app_.png')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-90 before:filter before:transition-transform before:content-[''] hover:before:scale-125 md:col-span-2 md:row-span-1 before:dark:bg-[#1B2532]"
          >
            <div className="flex flex-col gap-2 text-center text-white">
              <h2 className="text-lg font-bold group-hover:underline">
                Wordev game
              </h2>
              <p className="text-base dark:text-[#bdbdbd]">
                A Wordle Clone - Programming themed
              </p>
            </div>
          </a>
          <a
            href="http://rou-landing-page.vercel.app/"
            className="group rounded-lg bg-[#DDEEF8] p-3 md:col-span-2 md:row-span-1 dark:bg-[#1B2532]"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold group-hover:underline">
                Rou Landing Page
              </h2>
              <Image
                src={'/image-logo.png'}
                width={100}
                height={100}
                alt="rou"
              />
              <p className="text-base dark:text-[#bdbdbd]">
                A Modern Agency and Startup Landing Page - This is the first
                project I made with Tailwindcss
              </p>
            </div>
          </a>
          <a
            href="https://github.com/dngtnv/minimal-shop"
            className="group col-span-2 rounded-lg bg-[#DDEEF8] p-3 md:col-span-3 md:row-span-1 dark:bg-[#1B2532]"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold group-hover:underline">
                Minimal Shop
              </h2>
              <p className="text-base dark:text-[#bdbdbd]">
                Minimal Shop is a full-stack e-commerce application designed to
                provide a seamless shopping experience.
              </p>
            </div>
          </a>
          <a
            href="https://github.com/dngtnv/ease-booking"
            className="group col-span-2 rounded-lg bg-[#DDEEF8] p-3 md:col-span-3 md:row-span-1 dark:bg-[#1B2532]"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold group-hover:underline">
                Ease Booking
              </h2>
              <p className="text-base dark:text-[#bdbdbd]">
                This project is a full-stack hotel booking system with separate
                admin and client interfaces.
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
