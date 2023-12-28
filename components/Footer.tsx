const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-t-bd bg-footer bg-footer-pattern py-11">
      <p className="text-center text-tertiary" aria-label="Copyright">
        &copy; {currentYear} - DNGTNV. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
