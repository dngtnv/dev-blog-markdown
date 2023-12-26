const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-t-bd bg-footer-pattern py-11">
      <p className="text-center text-tertiary">
        &copy; {currentYear} - Tan Vu Duong. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
