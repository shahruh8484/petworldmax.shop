import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
              <Heart className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-secondary-foreground">
                Love for animals brings us together
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Everything about <span className="text-primary">pets</span> in one place
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Helpful information about pet care, nutrition, and health. 
              Expert advice and answers to all your questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Our Pets
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Readers</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Experts</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-pets.jpg"
                alt="Happy pets with family"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Happy Pets</div>
                  <div className="text-sm text-muted-foreground">Health and happiness</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
