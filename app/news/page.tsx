import News from "@/components/portfolio/sections/News"
import Navigations from "@/components/news/components/Navigations"
import Footer from "@/components/portfolio/components/Footer"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigations />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Latest Tech News</h1>
        <News />
      </main>
      <Footer />
    </div>
  )
}
