import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const pets = [
  {
    id: "cats",
    name: "Cats",
    description: "Graceful and independent companions that will fill your home with coziness and warmth.",
    image: "/images/cat.jpg",
    facts: ["Live 12-18 years", "Sleep 12-16 hours a day"],
  },
  {
    id: "dogs",
    name: "Dogs",
    description: "Loyal friends and dedicated protectors who are always happy to see you.",
    image: "/images/dog.jpg",
    facts: ["Live 10-13 years", "Need walks 2-3 times a day"],
  },
  {
    id: "birds",
    name: "Birds",
    description: "Bright and musical pets that will decorate your home with songs and beauty.",
    image: "/images/bird.jpg",
    facts: ["Live 5-15 years", "Social and intelligent"],
  },
  {
    id: "fish",
    name: "Fish",
    description: "Fascinating aquarium inhabitants that create an atmosphere of peace.",
    image: "/images/fish.jpg",
    facts: ["Live 2-10 years", "Help reduce stress"],
  },
]

export function PetsGrid() {
  return (
    <section id="pets" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Pets
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Choose Your Perfect Companion
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Each pet is unique. Learn more about different types of animals 
            and find the one that will become part of your family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pets.map((pet) => (
            <Link key={pet.id} href={`#${pet.id}`}>
              <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-border bg-card">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl font-bold text-card">
                      {pet.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {pet.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {pet.facts.map((fact, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {fact}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
