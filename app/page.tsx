import Header from '../components/Header'
import Hero from '../components/Hero'
import Article from '../components/article/ArticleList'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-5xl pt-24">
        <Hero />
        <Article />
      </main>
      <Footer />
    </>
  )
}
