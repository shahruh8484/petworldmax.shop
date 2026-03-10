import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const pets = [
  {
    id: "cats",
    name: "Кошки",
    description: "Грациозные и независимые компаньоны, которые наполнят ваш дом уютом и теплом.",
    image: "/images/cat.jpg",
    facts: ["Живут 12-18 лет", "Спят 12-16 часов в день"],
  },
  {
    id: "dogs",
    name: "Собаки",
    description: "Верные друзья и преданные защитники, которые всегда рады вашему возвращению.",
    image: "/images/dog.jpg",
    facts: ["Живут 10-13 лет", "Нужны прогулки 2 раза в день"],
  },
  {
    id: "birds",
    name: "Птицы",
    description: "Яркие и музыкальные питомцы, которые украсят ваш дом пением и красотой.",
    image: "/images/bird.jpg",
    facts: ["Живут 5-15 лет", "Общительны и умны"],
  },
  {
    id: "fish",
    name: "Рыбки",
    description: "Завораживающие обитатели аквариума, создающие атмосферу спокойствия.",
    image: "/images/fish.jpg",
    facts: ["Живут 2-10 лет", "Успокаивают нервы"],
  },
]

export function PetsGrid() {
  return (
    <section id="pets" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Наши питомцы
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Выберите своего идеального компаньона
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Каждый питомец уникален. Узнайте больше о разных видах домашних животных 
            и найдите того, кто станет частью вашей семьи.
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
                    Подробнее
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
