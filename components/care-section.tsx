import { Card, CardContent } from "@/components/ui/card"
import { Heart, Utensils, Stethoscope, Home, Sparkles, BookOpen } from "lucide-react"

const careItems = [
  {
    icon: Utensils,
    title: "Правильное питание",
    description: "Сбалансированный рацион — основа здоровья питомца. Узнайте, чем кормить вашего любимца.",
  },
  {
    icon: Stethoscope,
    title: "Здоровье и ветеринария",
    description: "Регулярные осмотры, вакцинация и профилактика заболеваний для долгой и счастливой жизни.",
  },
  {
    icon: Home,
    title: "Комфортное жильё",
    description: "Создайте идеальные условия: место для сна, игровая зона и безопасное пространство.",
  },
  {
    icon: Heart,
    title: "Любовь и внимание",
    description: "Общение и забота укрепляют связь между вами и питомцем, делая его счастливым.",
  },
  {
    icon: Sparkles,
    title: "Гигиена и уход",
    description: "Чистка шерсти, уход за когтями и зубами — важные процедуры для здоровья питомца.",
  },
  {
    icon: BookOpen,
    title: "Обучение и воспитание",
    description: "Дрессировка и социализация помогут вашему питомцу стать послушным и дружелюбным.",
  },
]

export function CareSection() {
  return (
    <section id="care" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Уход за питомцами
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              Как заботиться о вашем любимце
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Правильный уход — залог долгой и счастливой жизни вашего питомца. 
              Мы собрали самые важные аспекты заботы о домашних животных.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Регулярность — ключ к успеху</h4>
                  <p className="text-sm text-muted-foreground">
                    Соблюдайте режим кормления, прогулок и игр. Питомцы любят предсказуемость.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Stethoscope className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Профилактика лучше лечения</h4>
                  <p className="text-sm text-muted-foreground">
                    Регулярные визиты к ветеринару помогут выявить проблемы на ранней стадии.
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
