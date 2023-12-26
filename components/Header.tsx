import Link from 'next/link'
import ThemeToggleButton from './ThemeToggleButton'

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-4 z-10 bg-transparent">
      <div className="mx-auto flex h-[4.25rem] max-w-[44.375rem] items-center justify-between rounded-[13px] bg-navbar/55 px-4 backdrop-blur">
        <div className="flex items-center justify-center gap-7">
          <Link
            href="/"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-logo-pattern"
          >
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="15" fill="white" />
              </svg>
            </span>
          </Link>
          <nav className="text-center">
            <menu className="flex list-none items-center gap-6">
              <li className="font-medium hover:text-nav-hover dark:hover:text-nav-hover/75">
                <Link href="/">Home</Link>
              </li>
              <li className="font-medium hover:text-nav-hover dark:hover:text-nav-hover/75">
                <Link href="/about">About me</Link>
              </li>
              <li className="font-medium hover:text-nav-hover dark:hover:text-nav-hover/75">
                <Link href="/contact">Contacts</Link>
              </li>
            </menu>
          </nav>
        </div>
        <ThemeToggleButton />
      </div>
    </header>
  )
}

export default Header
