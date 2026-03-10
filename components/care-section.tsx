import { Card, CardContent } from "@/components/ui/card"
import { Heart, Utensils, Stethoscope, Home, Sparkles, BookOpen } from "lucide-react"

const careItems = [
  {
    icon: Utensils,
    title: "Proper Nutrition",
    description: "A balanced diet is the foundation of your pet's health. Learn what to feed your companion.",
  },
  {
    icon: Stethoscope,
    title: "Health & Veterinary Care",
    description: "Regular checkups, vaccinations, and disease prevention for a long and happy life.",
  },
  {
    icon: Home,
    title: "Comfortable Living",
    description: "Create ideal conditions: sleeping area, play zone, and safe space for your pet.",
  },
  {
    icon: Heart,
    title: "Love & Attention",
    description: "Interaction and care strengthen the bond between you and your pet, making them happy.",
  },
  {
    icon: Sparkles,
    title: "Hygiene & Grooming",
    description: "Coat cleaning, nail care, and dental hygiene are important for your pet's health.",
  },
  {
    icon: BookOpen,
    title: "Training & Education",
    description: "Training and socialization help your pet become obedient and friendly.",
  },
]

export function CareSection() {
  return (
    <section id="care" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Pet Care
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              How to Care for Your Pet
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Proper care is the key to a long and happy life for your pet. 
              We've gathered the most important aspects of pet care.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Consistency is Key</h4>
                  <p className="text-sm text-muted-foreground">
                    Maintain a schedule for feeding, walks, and play. Pets love predictability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Stethoscope className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Prevention is Better</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular vet visits help catch problems early and keep your pet healthy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {careItems.map((item, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
