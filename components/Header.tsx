import Link from 'next/link'
import ThemeToggleButton from './ThemeToggleButton'

const Header = () => {
  return (
    <header className="fixed inset-x-0 z-10 bg-transparent lg:top-4">
      <div className="flex h-[4.25rem] items-center justify-between bg-navbar/55 px-6 backdrop-blur lg:mx-auto lg:max-w-[44.375rem] lg:rounded-[13px] lg:px-4">
        <div className="flex items-center justify-center gap-5 sm:gap-7">
          <Link
            aria-label="Home"
            href="/"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-logo-pattern focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bd focus-visible:ring-offset-2"
          >
            <span>
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
          <nav className="text-center" aria-label="primary nav">
            <menu className="flex list-none items-center gap-3 sm:gap-6">
              <li className=" font-medium hover:text-nav-hover dark:hover:text-nav-hover/75">
                <Link
                  href="/"
                  className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bd focus-visible:ring-offset-2"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>
              <li className="font-medium hover:text-nav-hover dark:hover:text-nav-hover/75">
                <Link
                  href="/about"
                  className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bd focus-visible:ring-offset-2"
                  aria-label="About me"
                >
                  About
                </Link>
              </li>
              <li className="font-medium hover:text-nav-hover dark:hover:text-nav-hover/75">
                <Link
                  href="/contact"
                  className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bd focus-visible:ring-offset-2"
                  aria-label="Contacts"
                >
                  Contacts
                </Link>
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
