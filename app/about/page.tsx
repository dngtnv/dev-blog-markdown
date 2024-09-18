export default function About() {
  return (
    <>
      <section className="mx-auto mt-11 flex max-w-2xl flex-col gap-2 px-3 sm:px-6 lg:px-0">
        <h1 className="text-xl font-bold">About</h1>
        <p className="text-lg leading-7 dark:text-[#bdbdbd]">
          Hello! I&apos;m{' '}
          <span className="text-xl font-bold dark:text-white">
            Tan Vu Duong
          </span>
        </p>
        <p className="text-balance text-lg leading-7 dark:text-[#bdbdbd]">
          I&apos;m a full-stack web developer with a passion for creating
          elegant, efficient, and user-friendly websites. With expertise in
          modern web technologies, I strive to deliver high-quality solutions
          that meet and exceed client expectations.
        </p>
      </section>
      <section className="mx-auto mt-11 flex max-w-2xl flex-row justify-between px-3 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Skills</h1>
          <ul className="text-lg leading-7 dark:text-[#bdbdbd]">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React, Redux, Next.js</li>
            <li>Node.js, Express, MongoDB</li>
            <li>RESTful APIs, JWT, OAuth</li>
            <li>Git, GitHub</li>
            <li>Photoshop, Figma</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Interests & Hobbies</h1>
          <ul className="text-lg leading-7 dark:text-[#bdbdbd]">
            <li>Music</li>
            <li>Movie</li>
            <li>Photography</li>
          </ul>
        </div>
      </section>
      <section className="mx-auto my-11 flex max-w-2xl flex-col gap-2 px-3 sm:px-6 lg:px-0">
        <h1 className="text-xl font-bold">Connect</h1>
        <p className="text-lg dark:text-[#bdbdbd]">
          Reach me directly at{' '}
          <a
            className="font-medium text-black hover:underline hover:opacity-80 dark:text-white"
            href="mailto:dgtanvu@gmail.com"
          >
            dgtanvu@gmail.com
          </a>{' '}
          or connect on social media below.
        </p>
        <div className="flex gap-4">
          <a
            className="border-bg flex h-12 w-12 items-center justify-center rounded-md border bg-slate-300 transition-all hover:bg-slate-300/50 dark:bg-slate-800 dark:text-[#bdbdbd]"
            href="https://github.com/dngtnv"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 1536 1504"
            >
              <path
                fill="currentColor"
                d="M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0M291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2m31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3m30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7m42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3m57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6m63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11m58-10q-2-11-18-9q-16 3-14 15t18 8t14-14"
              />
            </svg>
          </a>
          <a
            className="border-bg flex h-12 w-12 items-center justify-center rounded-md border bg-slate-300 transition-all hover:bg-slate-300/50 dark:bg-slate-800 dark:text-[#bdbdbd]"
            href="https://www.instagram.com/dngtnv"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="20"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
