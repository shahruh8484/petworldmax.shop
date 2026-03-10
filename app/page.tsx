import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PetsGrid } from "@/components/pets-grid"
import { CareSection } from "@/components/care-section"
import { TipsSection } from "@/components/tips-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PetsGrid />
      <CareSection />
      <TipsSection />
      <Footer />
    </main>
  )
}
